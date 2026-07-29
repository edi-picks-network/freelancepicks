#!/usr/bin/env python3
"""Generate the ending section for the blog post."""
import json
import os
import urllib.request

QWEN_API_KEY = os.environ.get('QWEN_API_KEY_1')
if not QWEN_API_KEY:
    env_file = os.path.expanduser("~/.hermes/api_keys.env")
    if os.path.exists(env_file):
        with open(env_file, 'r') as f:
            for line in f:
                line = line.strip()
                if line.startswith('QWEN_API_KEY_1='):
                    QWEN_API_KEY = line.split('=', 1)[1].strip('"').strip("'")

QWEN_BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1"

def call_qwen(prompt, max_tokens=2000):
    data = json.dumps({
        "model": "qwen-plus",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.5,
        "max_tokens": max_tokens,
    }).encode('utf-8')
    req = urllib.request.Request(
        f"{QWEN_BASE_URL}/chat/completions",
        data=data,
        headers={"Authorization": f"Bearer {QWEN_API_KEY}", "Content-Type": "application/json"}
    )
    resp = urllib.request.urlopen(req, timeout=60)
    result = json.loads(resp.read().decode('utf-8'))
    content = result['choices'][0]['message']['content'].strip()
    content = content.replace('`', "'")
    content = content.replace('\u2018', "'").replace('\u2019', "'")
    content = content.replace('\u201c', "'").replace('\u201d', "'")
    content = content.replace('\u2013', '--').replace('\u2014', '---')
    content = content.replace('\u00a0', ' ')
    return content

# Get the ending that was cut off
prompt = """Continue the blog post section "Multi-Platform Considerations: When Platform TOS Collide With Your Contract" about freelance contracts. Cover: how Upwork, Fiverr, and other platform TOS interact with personal contracts; state-by-state considerations; digital signing tool recommendations; and end with a practical checklist freelancers can use.

Write the concluding sections only (3-5 paragraphs) ending with a "Freelancer Contract Readiness Checklist" with 10 actionable items.

Use straight quotes, no backticks."""

ending = call_qwen(prompt)
print(ending)
