#!/usr/bin/env python3
"""Generate a blog post and append it to blog-posts.ts - v2"""
import json
import re
import urllib.request
import urllib.parse

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
            {"role": "system", "content": "You are a professional freelance blogger. Write in authoritative G2-style English. Output ONLY the blog content, no JSON wrapping."},
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

# First, generate the blog content
content_prompt = """Write a complete blog post for freelancepicks.net, a freelancer tools comparison site.

Topic: "How to Build a Freelance Portfolio That Actually Gets You Hired in 2026"

Structure (use template #8 - Newcomer Guide):
1. Introduction - Why your portfolio matters more than ever in 2026
2. What platforms are actually looking for (AI screening, quantified results)
3. Where to start - a 3-step quick start framework
4. Platform-specific portfolio strategies (Upwork, Fiverr, Toptal, 99designs)
5. Include a comparison table showing what each platform prioritizes
6. FAQ section with 4 questions
7. Conclusion with actionable checklist

Format: Markdown with ## headings. Write in G2-style, first-person/third-person mix.
Length: 2500-4000 characters.
Important: Use backticks in the code fence for the table, not $$. Do not use ${} at all.
Use simple currency formatting like: $500 or USD 500 — never use ${...} syntax.

Output ONLY the blog post markdown content, starting with "# Title" """

print("Generating blog content...")
content = call_qwen(content_prompt)
print(f"Content generated: {len(content)} chars")
print()

# Check for ${} issues
if '${' in content:
    print("WARNING: Found ${} in content, replacing...")
    content = content.replace('${', '$ {')

# Also generate excerpt
excerpt_prompt = f"""Write a 100-150 character excerpt/summary for this blog post.

Blog post title: "How to Build a Freelance Portfolio That Actually Gets You Hired in 2026"

The excerpt should hook the reader and summarize the value. Output ONLY the excerpt text, no quotes, no JSON."""

print("Generating excerpt...")
excerpt = call_qwen(excerpt_prompt).strip().strip('"').strip("'")
print(f"Excerpt: {excerpt[:80]}...")
print()

# Build the blog entry
# First, escape backtick in content - the content itself uses backticks for the JS template string
# So we need the content to be inside backticks in the .ts file

# The blog entry uses backtick template strings. 
# The content IS the blog post markdown. We wrap it in ` ... `
# But we need to ensure the content itself doesn't have issues.

today = "2026-06-10"

entry = f"""  {{
    slug: "build-freelance-portfolio-2026",
    title: "How to Build a Freelance Portfolio That Actually Gets You Hired in 2026",
    excerpt: "{excerpt.replace(chr(34), chr(39)).replace(chr(10), ' ')}",
    content: `{content}`,
    author: "Chris Taylor",
    authorRole: "Freelance Portfolio Strategist",
    date: "{today}",
    category: "Freelance Tips",
    readTime: 7,
    tags: [
      "freelance portfolio",
      "portfolio tips",
      "upwork profile",
      "fiverr gig optimization",
      "freelance branding",
      "get hired",
      "freelancer success",
      "portfolio strategy 2026",
    ],
  }}"""

# Write the entry to a file
with open('/home/edi/freelancepicks-hub/scripts/blog_entry.txt', 'w') as f:
    f.write(entry)
print("Blog entry written to blog_entry.txt")
print(f"Entry length: {len(entry)} chars")
