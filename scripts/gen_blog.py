#!/usr/bin/env python3
"""Generate a blog post and append it to blog-posts.ts"""
import json
import re
import urllib.request
import urllib.error

def get_qwen_key():
    with open('/home/edi/.hermes/api_keys.env', 'rb') as f:
        raw = f.read().decode('latin-1')
    for line in raw.split('\n'):
        if line.startswith('QWEN_API_KEY_1='):
            return line.split('=', 1)[1].strip()
    return None

def call_qwen(prompt):
    qwen_key = get_qwen_key()
    url = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions"
    
    payload = {
        "model": "qwen-plus",
        "messages": [
            {"role": "system", "content": "You are a professional freelance blogger writing for freelancepicks.net, a freelancer tools comparison site. Write in G2-style English — authoritative, data-driven, and practical. Output ONLY valid JSON."},
            {"role": "user", "content": prompt}
        ],
        "max_tokens": 5000,
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
    
    with urllib.request.urlopen(req, timeout=180) as resp:
        result = json.loads(resp.read().decode('utf-8'))
        return result['choices'][0]['message']['content']

# Prompt for the blog post
prompt = f"""Generate a complete blog post in JSON format for freelancepicks.net (a freelancer tools comparison site).

Use structure template #8 (新手入门式/Newcomer Guide):
- What this is about
- Why you need it
- Where to start (3-step quick start)
- Tool recommendations (entry-level and advanced)
- Next learning path

Topic: "How to Build a Freelance Portfolio That Actually Gets You Hired in 2026"
Focus on: practical advice, platform-specific portfolio optimization (Upwork, Fiverr, Toptal, 99designs), what works in 2026 with AI-enhanced screening.

Output ONLY this JSON:
{{
  "slug": "build-freelance-portfolio-2026",
  "title": "How to Build a Freelance Portfolio That Actually Gets You Hired in 2026",
  "excerpt": "Your freelance portfolio is your most powerful sales tool — but most freelancers get it wrong. In 2026, platforms use AI to score portfolio quality, clients expect quantified case studies, and generic work samples get ignored. This guide walks you through building a portfolio that passes algorithmic screening, impresses human clients, and lands you higher-paying projects.",
  "content": "Full blog content here using backtick string template format. Use markdown. Must be 2500-4000 characters. Include intro, sections with ## headings, a comparison table for portfolio strategies across platforms, FAQ section with 3-5 questions, and a conclusion with actionable checklist.",
  "author": "Chris Taylor",
  "authorRole": "Freelance Portfolio Strategist",
  "date": "2026-06-10",
  "category": "Freelance Tips",
  "readTime": 7,
  "tags": ["freelance portfolio", "portfolio tips", "upwork profile", "fiverr gig optimization", "freelance branding", "get hired", "freelancer success", "portfolio strategy 2026"]
}}

IMPORTANT: 
1. The "content" field must use backtick template string format like: `# Title here...` 
2. Inside the content (inside backticks), do NOT use ${{...}} or any JS template expressions.
3. Content must be 2500-4000 characters.
4. Include at least one markdown comparison table.
5. Include a FAQ section with 3-5 questions.
6. Include specific, actionable advice with real numbers/data.
7. Write in authoritative, first-person/third-person G2 style.
8. All English, no Chinese.
9. Slug should be unique: "build-freelance-portfolio-2026"
10. Author is "Chris Taylor" with Role "Freelance Portfolio Strategist"
11. Date is "2026-06-10"
12. readTime should be 7 or 8"""
    
result = call_qwen(prompt)
print("=== RAW RESPONSE ===")
print(result[:200])
print("...")
print()

# Extract JSON
json_match = re.search(r'```(?:json)?\s*(\{.*?\})\s*```', result, re.DOTALL)
if json_match:
    json_str = json_match.group(1)
else:
    # Try to find { directly
    brace_start = result.find('{')
    brace_end = result.rfind('}')
    if brace_start >= 0 and brace_end > brace_start:
        json_str = result[brace_start:brace_end+1]
    else:
        json_str = result.strip()

try:
    post = json.loads(json_str)
    print("=== PARSED POST ===")
    print(f"Slug: {post['slug']}")
    print(f"Title: {post['title'][:50]}...")
    print(f"Content length: {len(post['content'])} chars")
    print(f"Excerpt length: {len(post['excerpt'])} chars")
    
    # Verify no ${{ in content
    if '${' in post['content']:
        print("WARNING: Found ${} in content!")
        post['content'] = post['content'].replace('${', '$ {')
    if '${' in post['excerpt']:
        post['excerpt'] = post['excerpt'].replace('${', '$ {')
    
    # Save to file for review
    with open('/home/edi/freelancepicks-hub/scripts/blog_post.json', 'w') as f:
        json.dump(post, f, indent=2)
    print("Saved to blog_post.json")
    
except Exception as e:
    print(f"ERROR: {e}")
    print(f"JSON string: {json_str[:500]}")
