#!/usr/bin/env python3
"""Refine 3 freelance tools via Qwen API - step by step."""
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

def get_tool_entry(content, tool_id):
    """Extract a tool entry from tools.ts."""
    tools_start = content.find('export const ALL_TOOLS: ToolData[] = [')
    # Find the tool entry
    pattern = re.compile(r'  \{\s*\n\s*id:\s*"' + re.escape(tool_id) + r'",\n.*?(?=\n  \},\n  \{|\n\];)', re.DOTALL)
    match = pattern.search(content)
    if match:
        return match.group(0)
    return None

def build_refine_prompt(tool_id, name, category, current_entry):
    """Build a prompt to refine this tool's longDescription."""
    prompt = f"""You are refining the tool entry for "{name}" (category: {category}) on a freelance tools comparison website called freelancepicks.net.

The current entry needs to be expanded into a detailed, G2-style review. Below is the current entry structure with the fields.

I need you to generate ONLY a JSON object with these fields for this tool:

```json
{{
  "longDescription": "A comprehensive, detailed description of 1000-1500 characters covering: the tool's positioning, core value proposition, key features, target audience, and what makes it unique. Write in an authoritative, informative tone - like a G2 review.",
  "pros": ["pro1", "pro2", "pro3", "pro4", "pro5", "pro6", "pro7"],
  "cons": ["con1", "con2", "con3", "con4"],
  "pricingDetail": "Detailed pricing information with specific numbers, tiers, and sources.",
  "features": ["feature1", "feature2", ... up to 10-12 features],
  "useCase": "Best for X. Not ideal for Y.",
  "scoreBreakdown": {{"features": 85, "reviews": 80, "momentum": 75, "popularity": 78}},
  "userQuotes": [
    {{"role": "Job Title", "company": "Company Name", "quote": "Realistic quote about the tool"}},
    {{"role": "Job Title", "company": "Company Name", "quote": "Another realistic quote"}},
    {{"role": "Job Title", "company": "Company Name", "quote": "A third realistic quote"}}
  ]
}}
```

IMPORTANT:
- longDescription must be 1000-1500 characters
- All text must be in English
- Facts/pricing must be realistic and verifiable
- pros should be 7 items, cons should be 4 items
- features should be 10-12 items
- userQuotes should include 3 quotes
- Score breakdown values should be 0-100 integers

Tool: {name} ({tool_id})
Category: {category}

Current short description: {current_entry[:200]}...

Output ONLY valid JSON, no other text."""
    return prompt

def replace_tool_entry(filepath, tool_id, new_data):
    """Replace a tool entry in the file with new data."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Find the tool entry
    pattern = re.compile(
        r'  \{\s*\n\s*id:\s*"' + re.escape(tool_id) + r'",\n.*?(?=\n  \},\n  \{|\n  \}\n\];)',
        re.DOTALL
    )
    match = pattern.search(content)
    if not match:
        print(f"ERROR: Could not find entry for {tool_id}")
        return False
    
    old_entry = match.group(0)
    
    # Build the new entry
    # Extract the header part (id, name, category, rating, reviewCount, icon, description)
    header_match = re.search(
        r'(  \{\s*\n\s*id:.*?description:.*?\n)',
        old_entry, re.DOTALL
    )
    if not header_match:
        print(f"ERROR: Could not find header for {tool_id}")
        return False
    
    header = header_match.group(1)
    
    # Parse current description to keep
    desc_match = re.search(r'description:\s*"(.*?)"', old_entry)
    current_desc = desc_match.group(1) if desc_match else ""
    
    # Get icon and category from current entry
    icon_match = re.search(r'icon:\s*(\w+)', old_entry)
    icon = icon_match.group(1) if icon_match else "Globe"
    
    cat_match = re.search(r'category:\s*"(.*?)"', old_entry)
    cat = cat_match.group(1) if cat_match else category
    
    rating_match = re.search(r'rating:\s*([\d.]+)', old_entry)
    rating = rating_match.group(1) if rating_match else "4.0"
    
    review_count_match = re.search(r'reviewCount:\s*(\d+)', old_entry)
    review_count = review_count_match.group(1) if review_count_match else "0"
    
    website_url_match = re.search(r'websiteUrl:\s*"(.*?)"', old_entry)
    website_url = website_url_match.group(1) if website_url_match else ""
    
    alt_match = re.search(r'alternatives:\s*\[(.*?)\]', old_entry)
    alternatives = alt_match.group(1) if alt_match else "[]"
    
    new_ld = new_data['longDescription'].replace('"', '\\"')
    new_pricing = new_data.get('pricingDetail', '').replace('"', '\\"')
    new_usecase = new_data.get('useCase', '').replace('"', '\\"')
    
    # Build the complete new entry
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
      {', '.join(f'"{p.replace(chr(34), chr(39))}"' for p in new_data['pros'])},
    ],
    cons: [
      {', '.join(f'"{c.replace(chr(34), chr(39))}"' for c in new_data['cons'])},
    ],
    pricing: "{new_data.get('pricing', 'See pricing detail')}",
    pricingDetail: "{new_pricing}",
    features: [
      {', '.join(f'"{f.replace(chr(34), chr(39))}"' for f in new_data['features'])},
    ],
    useCase: "{new_usecase}",
    websiteUrl: "{website_url}",
    alternatives: [{alternatives}],
    scoreBreakdown: {{
      features: {new_data['scoreBreakdown']['features']},
      reviews: {new_data['scoreBreakdown']['reviews']},
      momentum: {new_data['scoreBreakdown']['momentum']},
      popularity: {new_data['scoreBreakdown']['popularity']},
    }},
    userQuotes: [
      {', '.join(
        f'{{\n        role: "{q["role"]}",\n        company: "{q["company"]}",\n        quote: "{q["quote"].replace(chr(34), chr(39))}"\n      }}'
        for q in new_data['userQuotes']
      )},
    ],
  }}"""
    
    content = content.replace(old_entry, new_entry)
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"✓ Successfully updated {tool_id}")
    return True

# Main execution
tools_info = {
    'freelancer': {'name': 'Freelancer', 'category': 'General Freelance', 'pricing': '10% or $5 fee'},
    'designcrowd': {'name': 'DesignCrowd', 'category': 'Design & Creative', 'pricing': 'From $99+ per contest'},
    'clearvoice': {'name': 'ClearVoice', 'category': 'Writing & Content', 'pricing': 'Custom pricing'},
}

filepath = '/home/edi/freelancepicks-hub/app/data/tools.ts'

for tool_id, info in tools_info.items():
    print(f"\n{'='*60}")
    print(f"Processing: {info['name']} ({tool_id})")
    print(f"{'='*60}")
    
    # Get current entry
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Build prompt
    prompt = build_refine_prompt(tool_id, info['name'], info['category'], "")
    
    print("Calling Qwen API...")
    result, error = call_qwen(prompt)
    
    if error:
        print(f"ERROR calling Qwen API: {error}")
        continue
    
    # Parse JSON from response
    # Handle potential markdown code blocks
    json_match = re.search(r'```(?:json)?\s*(.*?)\s*```', result, re.DOTALL)
    if json_match:
        json_str = json_match.group(1)
    else:
        json_str = result.strip()
    
    try:
        new_data = json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"JSON parse error: {e}")
        print(f"Raw response: {result[:500]}...")
        continue
    
    # Validate
    if 'longDescription' not in new_data:
        print("ERROR: No longDescription in response")
        continue
    
    ld_len = len(new_data['longDescription'])
    print(f"New longDescription length: {ld_len} chars")
    
    if ld_len < 1000:
        print(f"WARNING: longDescription too short ({ld_len}), will try again...")
        # Try again with more explicit instructions
        fix_prompt = f"""The JSON you generated has a longDescription of only {ld_len} characters, but it needs to be 1000-1500 characters. 

Please regenerate with a MUCH LONGER longDescription for {info['name']}. Make it comprehensive:

- Start with a strong positioning paragraph (what the tool is and why it matters)
- Describe key features and capabilities
- Explain target users and ideal use cases
- Include recent developments or updates
- Add market context

Output ONLY valid JSON with all the same fields.

Current data was: {json_str[:200]}..."""
        
        result2, error2 = call_qwen(fix_prompt)
        if error2:
            print(f"ERROR on retry: {error2}")
            continue
        
        json_match2 = re.search(r'```(?:json)?\s*(.*?)\s*```', result2, re.DOTALL)
        if json_match2:
            json_str2 = json_match2.group(1)
        else:
            json_str2 = result2.strip()
        
        try:
            new_data = json.loads(json_str2)
            ld_len = len(new_data['longDescription'])
            print(f"Retry longDescription length: {ld_len} chars")
        except json.JSONDecodeError:
            print("Retry JSON parse error, using original")
    
    # Replace in file
    success = replace_tool_entry(filepath, tool_id, new_data)
    if success:
        print(f"✓ {info['name']} refined successfully!")

print("\n\n=== ALL DONE ===")
