#!/usr/bin/env python3
"""
Refresh 3 tools + 1 blog for freelancepicks.net using Qwen API.
Updates app/data/tools.ts and app/data/blog-posts.ts with generated content.
"""
import requests
import json
import os
import re
import sys
import random

# Get Qwen API key
QWEN_API_KEY = os.environ.get('QWEN_API_KEY_1')
if not QWEN_API_KEY:
    env_file = os.path.expanduser("~/.hermes/api_keys.env")
    if os.path.exists(env_file):
        with open(env_file, 'r') as f:
            for line in f:
                line = line.strip()
                if line.startswith('QWEN_API_KEY_1='):
                    QWEN_API_KEY = line.split('=', 1)[1].strip('"').strip("'")
                    break

if not QWEN_API_KEY or '***' in QWEN_API_KEY:
    print("ERROR: QWEN_API_KEY_1 not found or masked")
    sys.exit(1)

print(f"Using API key: {QWEN_API_KEY[:10]}...{QWEN_API_KEY[-4:]}")

TOOLS_TS_PATH = "/home/edi/freelancepicks-hub/app/data/tools.ts"
BLOG_TS_PATH = "/home/edi/freelancepicks-hub/app/data/blog-posts.ts"

def call_qwen(prompt, max_tokens=6000):
    """Call Qwen API with a prompt and return response text."""
    response = requests.post(
        "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {QWEN_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "qwen-plus",
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": max_tokens,
            "temperature": 0.7
        },
        timeout=120
    )
    if response.status_code != 200:
        print(f"API Error: {response.status_code} - {response.text[:200]}")
        raise Exception(f"API call failed: {response.status_code}")
    result = response.json()
    content = result["choices"][0]["message"]["content"]
    print(f"   API response: {len(content)} chars received")
    return content

def parse_json_response(text):
    """Parse JSON response, handling potential formatting issues."""
    text = re.sub(r'```json\s*', '', text)
    text = re.sub(r'```\s*', '', text)
    text = text.strip()
    return json.loads(text)

def generate_tool_content(tool_name):
    """Generate G2-style content for a freelancing tool."""
    prompt = f"""You are a freelance industry analyst writing deep review content for {tool_name}. 
Generate ALL of the following fields as a JSON object. Return ONLY valid JSON, no other text.

Fields needed:
1. "longDescription": A 600-1000 character narrative review covering: market position, key strengths, honest weaknesses, and who should use it. Use natural evaluative tone, not marketing fluff.
2. "pros": Array of exactly 7 detailed, specific advantages (each 10-25 words).
3. "cons": Array of exactly 4 honest, practical disadvantages (each 10-25 words).
4. "features": Array of exactly 12 specific, named features.
5. "pricingDetail": A string with pricing tiers and honest cost notes. Avoid using double quotes inside this string.
6. "useCase": Format as: "Best for: [who benefits most]. Not ideal for: [who should look elsewhere]."
7. "scoreBreakdown": {{"features": 0-100, "reviews": 0-100, "momentum": 0-100, "popularity": 0-100}} — realistic scores
8. "userQuotes": Array of exactly 2 objects with "role", "company", "quote" fields. Do NOT use double quotes inside quote values — use single quotes or rephrase.

IMPORTANT: Return ONLY valid JSON. No markdown, no backticks, no explanation."""

    return call_qwen(prompt)

def esc(s):
    """Escape a string for TypeScript double-quoted string."""
    return s.replace('\\', '\\\\').replace('"', '\\"')

def extract_immutable_fields(content, tool_id):
    """Extract immutable fields from an existing tool block."""
    data = {}
    block = extract_tool_block(content, tool_id)
    if block is None:
        return None
    
    m = re.search(r'name:\s*"([^"]*)"', block)
    if m: data['name'] = m.group(1)
    
    m = re.search(r'category:\s*"([^"]*)"', block)
    if m: data['category'] = m.group(1)
    
    m = re.search(r'rating:\s*([\d.]+)', block)
    if m: data['rating'] = float(m.group(1))
    
    m = re.search(r'reviewCount:\s*(\d+)', block)
    if m: data['reviewCount'] = int(m.group(1))
    
    m = re.search(r'icon:\s*(\w+)', block)
    if m: data['icon'] = m.group(1)
    
    m = re.search(r'description:\s*"([^"]*)"', block)
    if m: data['description'] = m.group(1)
    
    m = re.search(r'pricing:\s*"([^"]*)"', block)
    if m: data['pricing'] = m.group(1)
    
    m = re.search(r'websiteUrl:\s*"([^"]*)"', block)
    if m: data['websiteUrl'] = m.group(1)
    
    alts_section = block[block.find('alternatives:'):]
    alts = re.findall(r'"([^"]*?)"', alts_section)
    data['alternatives'] = alts
    
    return data

def extract_tool_block(content, tool_id):
    """Extract the full tool object block from the file content using regex."""
    # Match from the opening { before id to the closing }, after userQuotes
    # Look for pattern: `  {\n    id: "tool_id"` ... `  },`
    pattern = rf'(?:\{{[^{{}}]*\n)?[ \t]*{{[ \t]*\n[ \t]*id: "{tool_id}"[\\s\\S]*?(?=\n[ \t]*\\}},\n[ \t]*{{)'
    
    # Simpler approach: find the line with id, then backtrack to find {, 
    # then find the matching }, that closes the tool
    lines = content.split('\n')
    
    id_line = None
    for i, line in enumerate(lines):
        if f'id: "{tool_id}"' in line:
            id_line = i
            break
    
    if id_line is None:
        print(f"ERROR: Could not find id for {tool_id}")
        return None
    
    # Backtrack to find the opening { of this tool
    start_line = None
    for j in range(id_line, -1, -1):
        if lines[j].strip() == '{':
            start_line = j
            break
    
    if start_line is None:
        print(f"ERROR: Could not find opening {{ for {tool_id}")
        return None
    
    # Forward to find the closing }, of this tool
    # Track brace depth, stopping at the correct level
    end_line = None
    brace_depth = 0
    for k in range(start_line, len(lines)):
        stripped = lines[k].strip()
        # Count opening braces
        brace_depth += stripped.count('{')
        # Count closing braces
        brace_depth -= stripped.count('}')
        
        if brace_depth <= 0 and stripped.endswith('},'):
            end_line = k
            break
    
    if end_line is None:
        print(f"ERROR: Could not find end for {tool_id}")
        return None
    
    block_lines = lines[start_line:end_line+1]
    return '\n'.join(block_lines)

def replace_tool_block(content, tool_id, new_block):
    """Replace a tool's block in the content using extract_tool_block."""
    old_block = extract_tool_block(content, tool_id)
    if old_block is None:
        return None
    
    if old_block not in content:
        print(f"ERROR: Old block not found in content for {tool_id}")
        return None
    
    return content.replace(old_block, new_block, 1)

def build_tool_block(data, tool_id):
    """Build a TypeScript tool object block."""
    lines = []
    lines.append('  {')
    lines.append(f'    id: "{tool_id}",')
    lines.append(f'    name: "{esc(data["name"])}",')
    lines.append(f'    category: "{esc(data["category"])}",')
    lines.append(f'    rating: {data["rating"]},')
    lines.append(f'    reviewCount: {data["reviewCount"]},')
    lines.append(f'    icon: {data["icon"]},')
    lines.append(f'    description: "{esc(data["description"])}",')
    lines.append(f'    longDescription:')
    ld = esc(data["longDescription"])
    lines.append(f'      "{ld}",')
    lines.append(f'    pros: [')
    for p in data['pros']:
        lines.append(f'      "{esc(p)}",')
    lines.append(f'    ],')
    lines.append(f'    cons: [')
    for c in data['cons']:
        lines.append(f'      "{esc(c)}",')
    lines.append(f'    ],')
    lines.append(f'    pricing: "{esc(data["pricing"])}",')
    lines.append(f'    pricingDetail: "{esc(data["pricingDetail"])}",')
    lines.append(f'    features: [')
    for f_item in data['features']:
        lines.append(f'      "{esc(f_item)}",')
    lines.append(f'    ],')
    lines.append(f'    useCase: "{esc(data["useCase"])}",')
    lines.append(f'    websiteUrl: "{esc(data["websiteUrl"])}",')
    lines.append(f'')
    lines.append(f'    alternatives: [')
    for a in data.get('alternatives', []):
        lines.append(f'      "{a}",')
    lines.append(f'    ],')
    lines.append(f'')
    lines.append(f'    scoreBreakdown: {{')
    sb = data['scoreBreakdown']
    lines.append(f'      features: {sb.get("features", 85)},')
    lines.append(f'      reviews: {sb.get("reviews", 85)},')
    lines.append(f'      momentum: {sb.get("momentum", 85)},')
    lines.append(f'      popularity: {sb.get("popularity", 85)},')
    lines.append(f'    }},')
    lines.append(f'')
    lines.append(f'    userQuotes: [')
    for q in data['userQuotes']:
        lines.append(f'      {{')
        lines.append(f'        role: "{esc(q["role"])}",')
        lines.append(f'        company: "{esc(q["company"])}",')
        lines.append(f'        quote: "{esc(q["quote"])}"')
        lines.append(f'      }},')
    lines.append(f'    ],')
    lines.append(f'  }},')
    return '\n'.join(lines)

def generate_blog_content():
    """Generate a new blog post about freelance tools."""
    prompt = """You are a freelance industry expert writing a detailed blog post about freelance platforms in 2026.

Generate a blog post as a JSON object with these fields:
1. "slug": A URL-friendly slug like "top-freelance-platforms-for-designers-2026"
2. "title": An engaging, SEO-friendly title (60-80 chars)
3. "excerpt": A 2-3 sentence summary (200-300 chars)
4. "content": The full blog post content (2000-4000 words), written in markdown format with:
   - An engaging intro
   - Multiple sections with ## headings
   - Data points, comparisons, and practical advice
   - A concluding section
   - Include details about specific tools (Fiverr, 99designs, DesignCrowd, Contently, ClearVoice, Guru, PeoplePerHour)
   - Make it useful for freelancers deciding which platform to use
   - Use natural, expert voice
5. "author": A realistic author name like "Sarah Mitchell"
6. "authorRole": Like "Freelance Copywriter & Platform Review Expert"
7. "category": Like "Freelance Platforms" or "Freelancing Tips"
8. "readTime": An integer (5-10)
9. "tags": Array of 8-12 relevant tags

Return ONLY valid JSON. No markdown, no backticks, no explanation."""

    return call_qwen(prompt, max_tokens=8000)


def main():
    print("=" * 60)
    print(f"FreelancePicks Refresh")
    print("=" * 60)
    
    # --- Refresh 3 tools ---
    all_tool_ids = ["upwork", "fiverr", "toptal", "freelancer", "peopleperhour", "guru", "99designs", "designcrowd", "contently", "clearvoice"]
    all_tool_names = {
        "upwork": "Upwork", "fiverr": "Fiverr", "toptal": "Toptal", "freelancer": "Freelancer.com",
        "peopleperhour": "PeoplePerHour", "guru": "Guru.com", "99designs": "99designs",
        "designcrowd": "DesignCrowd", "contently": "Contently", "clearvoice": "ClearVoice"
    }
    
    random.seed(20260607)
    selected_tools = random.sample(all_tool_ids, 3)
    print(f"\nSelected tools for refresh: {selected_tools}")
    
    with open(TOOLS_TS_PATH, 'r') as f:
        content = f.read()
    
    for tool_id in selected_tools:
        tool_name = all_tool_names[tool_id]
        print(f"\n{'='*50}")
        print(f"Generating content for: {tool_name}")
        print(f"{'='*50}")
        
        # Extract immutable fields
        immutable = extract_immutable_fields(content, tool_id)
        if immutable is None:
            print(f"ERROR: Could not extract immutable data for {tool_id}")
            continue
        
        # Generate new content
        raw = generate_tool_content(tool_name)
        try:
            new_data = parse_json_response(raw)
        except json.JSONDecodeError as e:
            print(f"ERROR: JSON parse failed for {tool_id}: {e}")
            print(f"Raw response: {raw[:200]}")
            continue
        
        # Validate and truncate longDescription
        ld = new_data.get("longDescription", "")
        if len(ld) > 1000:
            new_data["longDescription"] = ld[:997] + "..."
        elif len(ld) < 600:
            print(f"  WARNING: longDescription only {len(ld)} chars")
        
        # Validate arrays
        for field in ['pros', 'cons', 'features']:
            if field not in new_data or not isinstance(new_data[field], list):
                print(f"  WARNING: {field} missing or not an array, using defaults")
                new_data[field] = []
        if 'userQuotes' not in new_data or not isinstance(new_data['userQuotes'], list):
            new_data['userQuotes'] = []
        
        # Merge immutable + generated
        merged = {**immutable, **new_data}
        
        # Build new block
        new_block = build_tool_block(merged, tool_id)
        
        # Replace in content
        new_content = replace_tool_block(content, tool_id, new_block)
        if new_content is None:
            continue
        content = new_content
        
        ld_len = len(merged.get("longDescription", ""))
        print(f"  UPDATED: {tool_id} longDescription={ld_len}c, pros={len(merged.get('pros',[]))}, cons={len(merged.get('cons',[]))}, features={len(merged.get('features',[]))}")
    
    # Write updated tools.ts
    with open(TOOLS_TS_PATH, 'w') as f:
        f.write(content)
    print(f"\nTOOLS.TS SAVED")
    
    # --- Refresh 1 blog post ---
    print(f"\n{'='*50}")
    print("Generating new blog post")
    print(f"{'='*50}")
    
    raw_blog = generate_blog_content()
    try:
        blog_data = parse_json_response(raw_blog)
    except json.JSONDecodeError as e:
        print(f"ERROR: JSON parse failed for blog: {e}")
        blog_data = None
    
    if blog_data:
        with open(BLOG_TS_PATH, 'r') as f:
            blog_content = f.read()
        
        import datetime
        today = datetime.date.today().isoformat()
        
        slug = blog_data.get("slug", f"freelance-tips-{today.replace('-','')}")
        title = blog_data.get("title", "Freelance Platform Tips")
        excerpt = blog_data.get("excerpt", "Expert advice for freelancers.")
        content_text = blog_data.get("content", "")
        author = blog_data.get("author", "Sarah Mitchell")
        author_role = blog_data.get("authorRole", "Freelance Industry Expert")
        category = blog_data.get("category", "Freelancing Tips")
        read_time = blog_data.get("readTime", 7)
        tags = blog_data.get("tags", ["Freelancing", "Freelance Platforms"])
        
        # Escape content for TypeScript template literal (backticks)
        content_escaped = content_text.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
        
        # Build the blog post entry
        new_blog_lines = []
        new_blog_lines.append('{')
        new_blog_lines.append(f'    slug: "{slug}",')
        new_blog_lines.append(f'    title: "{esc(title)}",')
        new_blog_lines.append(f'    excerpt: "{esc(excerpt)}",')
        new_blog_lines.append(f'    content: `{content_escaped}`')
        new_blog_lines.append(f'    author: "{esc(author)}",')
        new_blog_lines.append(f'    authorRole: "{esc(author_role)}",')
        new_blog_lines.append(f'    date: "{today}",')
        new_blog_lines.append(f'    category: "{esc(category)}",')
        new_blog_lines.append(f'    readTime: {read_time},')
        new_blog_lines.append(f'    tags: [')
        for tag in tags:
            new_blog_lines.append(f'      "{esc(tag)}",')
        new_blog_lines.append(f'    ],')
        new_blog_lines.append('  }')
        
        new_blog_block = '\n'.join(new_blog_lines)
        
        # Find and replace the first blog post
        blog_start_pattern = r'\{\s*\n\s*slug:\s*"'
        match = re.search(blog_start_pattern, blog_content)
        if match:
            blog_start = match.start()
            brace_count = 0
            blog_end = blog_start
            found_open = False
            for i in range(blog_start, len(blog_content)):
                ch = blog_content[i]
                if ch == '{':
                    brace_count += 1
                    found_open = True
                elif ch == '}':
                    brace_count -= 1
                    if found_open and brace_count == 0:
                        blog_end = i + 1
                        break
            
            old_blog = blog_content[blog_start:blog_end]
            blog_content = blog_content.replace(old_blog, new_blog_block, 1)
            
            with open(BLOG_TS_PATH, 'w') as f:
                f.write(blog_content)
            print(f"\nBLOG POST SAVED: '{slug}' (date: {today})")
        else:
            print("ERROR: Could not find existing blog post to replace")
    
    print(f"\n{'='*60}")
    print("REFRESH COMPLETE")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
