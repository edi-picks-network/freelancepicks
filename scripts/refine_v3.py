#!/usr/bin/env python3
"""Refine 3 freelance tools via Qwen API - v3."""
import json
import re
import urllib.request
import urllib.error
import sys

def get_qwen_key():
    with open('/home/edi/.hermes/api_keys.env', 'rb') as f:
        raw = f.read().decode('latin-1')
    for line in raw.split('\n'):
        if line.startswith('QWEN_API_KEY_1='):
            return line.split('=', 1)[1].strip()
    return None

def call_qwen(prompt, system_msg="You are a professional tech writer creating detailed tool reviews for a freelance tools comparison website. Output only valid JSON, no markdown."):
    qwen_key = get_qwen_key()
    if not qwen_key:
        return None, "No QWEN key found"
    
    url = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions"
    
    payload = {
        "model": "qwen-plus",
        "messages": [
            {"role": "system", "content": system_msg},
            {"role": "user", "content": prompt}
        ],
        "max_tokens": 4000,
        "temperature": 0.7
    }
    
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode('utf-8'),
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {qwen_key}"
        },
        method="POST"
    )
    
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            result = json.loads(resp.read().decode('utf-8'))
            content = result['choices'][0]['message']['content']
            return content, None
    except Exception as e:
        return None, str(e)

def refine_tool(filepath, tool_id, name, category, pricing_label):
    """Refine a single tool entry."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Get current entry
    pattern = re.compile(
        r'  \{\s*\n\s*id:\s*"' + re.escape(tool_id) + r'",\n.*?(?=\n  \},\n  \{|\n  \}\n\];)',
        re.DOTALL
    )
    match = pattern.search(content)
    if not match:
        print(f"ERROR: Could not find entry for {tool_id}")
        return False
    
    old_entry = match.group(0)
    
    # Extract key fields from current entry
    def extract_field(pattern_str, default=""):
        m = re.search(pattern_str, old_entry)
        return m.group(1) if m else default
    
    current_desc = extract_field(r'description:\s*"(.*?)"', "")
    icon = extract_field(r'icon:\s*(\w+)', "Globe")
    cat = extract_field(r'category:\s*"(.*?)"', category)
    rating = extract_field(r'rating:\s*([\d.]+)', "4.0")
    review_count = extract_field(r'reviewCount:\s*(\d+)', "0")
    website_url = extract_field(r'websiteUrl:\s*"(.*?)"', "")
    alt_str = extract_field(r'alternatives:\s*\[(.*?)\]', "")
    current_ld = extract_field(r'longDescription:\s*\n\s*"(.*?)"(?=\s*\n)', "")
    
    print(f"Current longDescription: {len(current_ld)} chars")
    
    # Build the Qwen prompt
    prompt = f"""You are refining the tool entry for "{name}" (category: {category}) on freelancepicks.net.

Current description: {current_desc[:150]}...

I need you to generate a complete, detailed, G2-style review. Output ONLY valid JSON with these fields:

```json
{{
  "longDescription": "A comprehensive 1000-1500 character description covering: the tool's market positioning, core value proposition, key features, target audience, history/context, and what makes it unique. Write authoritatively.",
  "pros": ["7 distinct advantages"],
  "cons": ["4 honest limitations"],
  "pricingDetail": "Detailed pricing with numbers, tiers, and sources",
  "features": ["10-12 detailed features"],
  "useCase": "Best for... Not ideal for...",
  "scoreBreakdown": {{"features": 85, "reviews": 80, "momentum": 75, "popularity": 78}},
  "userQuotes": [
    {{"role": "Job Title", "company": "Company", "quote": "Realistic quote"}},
    {{"role": "Job Title", "company": "Company", "quote": "Realistic quote"}},
    {{"role": "Job Title", "company": "Company", "quote": "Realistic quote"}}
  ]
}}
```

CRITICAL:
- longDescription MUST be 1000-1500 characters
- All English, no Chinese
- Realistic facts and pricing
- 7 pros, 4 cons, 10-12 features, 3 quotes
- Scores 0-100

Tool: {name} ({tool_id})
Category: {category}
Current pricing label: {pricing_label}

Output ONLY valid JSON, no other text."""
    
    print("Calling Qwen API...")
    
    # Try up to 2 times for length
    for attempt in range(2):
        result, error = call_qwen(prompt)
        if error:
            print(f"ERROR: {error}")
            return False
        
        # Parse JSON
        json_match = re.search(r'```(?:json)?\s*(.*?)\s*```', result, re.DOTALL)
        if json_match:
            json_str = json_match.group(1)
        else:
            json_str = result.strip()
        
        # Clean up any non-JSON before/after
        try:
            new_data = json.loads(json_str)
        except json.JSONDecodeError:
            # Try to find JSON object
            brace_match = re.search(r'\{.*\}', json_str, re.DOTALL)
            if brace_match:
                try:
                    new_data = json.loads(brace_match.group(0))
                except:
                    print(f"JSON parse error. Response: {result[:300]}")
                    return False
            else:
                print(f"No JSON found. Response: {result[:300]}")
                return False
        
        ld = new_data.get('longDescription', '')
        ld_len = len(ld)
        print(f"  Attempt {attempt+1}: longDescription = {ld_len} chars")
        
        if ld_len >= 1000:
            break
        else:
            print(f"  Too short, retrying with length emphasis...")
            prompt = f"""The longDescription you provided was only {ld_len} characters. It MUST be 1000-1500 characters. 

Please regenerate with a much longer, more detailed description for {name}. Include:

1. Market positioning and history (what makes it relevant)
2. Core features and capabilities explained
3. Target user profiles and ideal scenarios
4. Recent platform updates or changes
5. How it compares to competitors

Keep the same JSON structure. Output ONLY valid JSON.
Current pricing label: {pricing_label}"""
    
    # Build the new entry
    def esc(s):
        return s.replace('"', '\\"').replace('\n', '\\n')
    
    def esc_sq(s):
        return s.replace('"', "'")
    
    new_ld = esc(ld)
    new_pricing = esc(new_data.get('pricingDetail', ''))
    new_usecase = esc(new_data.get('useCase', ''))
    
    new_entry = f"""  {{
    id: "{tool_id}",
    name: "{name}",
    category: "{cat}",
    rating: {rating},
    reviewCount: {review_count},
    icon: {icon},
    description: "{current_desc}",
    longDescription:
      "{new_ld}",
    pros: [
      {', '.join(f'"{esc_sq(p)}"' for p in new_data['pros'])},
    ],
    cons: [
      {', '.join(f'"{esc_sq(c)}"' for c in new_data['cons'])},
    ],
    pricing: "{pricing_label}",
    pricingDetail: "{new_pricing}",
    features: [
      {', '.join(f'"{esc_sq(f)}"' for f in new_data['features'])},
    ],
    useCase: "{new_usecase}",
    websiteUrl: "{website_url}",
    alternatives: [{alt_str}],
    scoreBreakdown: {{
      features: {new_data['scoreBreakdown']['features']},
      reviews: {new_data['scoreBreakdown']['reviews']},
      momentum: {new_data['scoreBreakdown']['momentum']},
      popularity: {new_data['scoreBreakdown']['popularity']},
    }},
    userQuotes: [
      {', '.join(
        f'{{\n        role: "{q["role"]}",\n        company: "{q["company"]}",\n        quote: "{esc_sq(q["quote"])}"\n      }}'
        for q in new_data['userQuotes']
      )},
    ],
  }}"""
    
    # Replace in file
    content = content.replace(old_entry, new_entry)
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"✓ {name} refined successfully!")
    return True

# Main
filepath = '/home/edi/freelancepicks-hub/app/data/tools.ts'

# Pick 3 unrefined tools
tools = [
    ('freelancer', 'Freelancer', 'General Freelance', '10% or $5 fee'),
    ('designcrowd', 'DesignCrowd', 'Design & Creative', 'From $99+ per contest'),
    ('clearvoice', 'ClearVoice', 'Writing & Content', 'Custom pricing'),
]

for tool_id, name, cat, pricing in tools:
    print(f"\n{'='*60}")
    print(f"Processing: {name} ({tool_id})")
    print(f"{'='*60}")
    ok = refine_tool(filepath, tool_id, name, cat, pricing)
    if not ok:
        print(f"✗ FAILED: {name}")

print("\n\n=== REFINEMENT COMPLETE ===")

# Verify lengths
print("\n\n=== VERIFICATION ===")
with open(filepath, 'r') as f:
    final_content = f.read()

for tool_id, name, _, _ in tools:
    pattern = re.compile(r'id:\s*"' + re.escape(tool_id) + r'".*?longDescription:\s*\n\s*"(.*?)"(?=\s*\n)', re.DOTALL)
    m = pattern.search(final_content)
    if m:
        ld = m.group(1)
        print(f"{name}: {len(ld)} chars {'✓' if len(ld) >= 1000 else '✗ TOO SHORT'}")
    else:
        print(f"{name}: NOT FOUND")
