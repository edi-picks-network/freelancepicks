#!/usr/bin/env python3
"""Generate a blog post about freelance contract templates using Qwen API."""
import json
import urllib.request
import re

with open('/tmp/daily_keys.json') as f:
    keys = json.load(f)

QWEN_API_KEY = keys['QWEN_API_KEY_1']
QWEN_BASE_URL = keys.get('QWEN_BASE_URL', 'https://dashscope.aliyuncs.com/compatible-mode/v1')

def call_qwen(prompt, system_msg="You are an expert freelance business consultant and contract specialist.", max_tokens=4000):
    data = json.dumps({
        "model": "qwen-plus",
        "messages": [
            {"role": "system", "content": system_msg},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.5,
        "max_tokens": max_tokens,
    }).encode('utf-8')
    
    req = urllib.request.Request(
        f"{QWEN_BASE_URL}/chat/completions",
        data=data,
        headers={
            "Authorization": f"Bearer {QWEN_API_KEY}",
            "Content-Type": "application/json"
        }
    )
    resp = urllib.request.urlopen(req, timeout=120)
    result = json.loads(resp.read().decode('utf-8'))
    return result['choices'][0]['message']['content'].strip()

def clean_text(text):
    """Replace backticks with single quotes, smart quotes with ASCII."""
    text = text.replace('`', "'")
    text = text.replace('\u2018', "'").replace('\u2019', "'")
    text = text.replace('\u201c', "'").replace('\u201d', "'")
    text = text.replace('\u2013', '--').replace('\u2014', '---')
    text = text.replace('\u00a0', ' ')
    return text

prompt = """Write a comprehensive, data-driven blog post titled "Freelance Contract Templates: Your Complete 2026 Guide to Bulletproof Agreements"

Requirements:
- Author: Sarah Mitchell (a different author from Chris Taylor - she's a Freelance Business Attorney & Contract Advisor)
- Today's date: 2026-07-30
- Category: Freelance Business
- Read time: 12 minutes
- Minimum 3000 words
- Include real data, statistics, and practical advice
- Structure with H2 headings (using ##)
- NO markdown code blocks or backticks - use single quotes for any inline code
- Use straight ASCII quotes only (no smart quotes, no curly quotes)
- Make it practical and actionable with specific contract clauses, templates types, and negotiation advice
- Include sections on: why contracts matter for freelancers, essential clauses every freelance contract needs, scope of work definitions, payment terms and milestones, IP ownership clauses, confidentiality/NDAs, termination clauses, dispute resolution, multi-platform considerations (Upwork, Fiverr, direct clients), state-by-state considerations, and digital signing tools
- Focus on 2026 legal landscape and remote work considerations
- End with a practical checklist freelancers can use

Return ONLY the blog content starting with the title as H1 (# ...). Do NOT include any metadata in the output - just the markdown content."""

print("Generating blog post...")
content = call_qwen(prompt, max_tokens=5000)
content = clean_text(content)

print(f"Generated {len(content)} characters")

# Save for later
with open('/tmp/blog_content.txt', 'w') as f:
    f.write(content)

print("Blog content saved to /tmp/blog_content.txt")
