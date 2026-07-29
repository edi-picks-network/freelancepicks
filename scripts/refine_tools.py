#!/usr/bin/env python3
"""Refine tool data fields using Qwen API - incremental refinement."""
import json
import os
import sys
import re

sys.path.insert(0, '/home/edi/freelancepicks-hub/scripts')

with open('/tmp/daily_keys.json') as f:
    keys = json.load(f)

QWEN_API_KEY = keys['QWEN_API_KEY_1']
QWEN_BASE_URL = keys.get('QWEN_BASE_URL', 'https://dashscope.aliyuncs.com/compatible-mode/v1')

import urllib.request
import urllib.error

def call_qwen(prompt, system_msg="You are an expert freelance market analyst. Respond with only the requested content."):
    """Call Qwen API with prompt, return response text."""
    data = json.dumps({
        "model": "qwen-plus",
        "messages": [
            {"role": "system", "content": system_msg},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.4,
        "max_tokens": 2000,
    }).encode('utf-8')
    
    req = urllib.request.Request(
        f"{QWEN_BASE_URL}/chat/completions",
        data=data,
        headers={
            "Authorization": f"Bearer {QWEN_API_KEY}",
            "Content-Type": "application/json"
        }
    )
    try:
        resp = urllib.request.urlopen(req, timeout=60)
        result = json.loads(resp.read().decode('utf-8'))
        return result['choices'][0]['message']['content'].strip()
    except Exception as e:
        print(f"API error: {e}")
        return None

def clean_text(text):
    """Replace backticks with single quotes, smart quotes with ASCII."""
    text = text.replace('`', "'")
    text = text.replace('\u2018', "'").replace('\u2019', "'")
    text = text.replace('\u201c', "'").replace('\u201d', "'")
    text = text.replace('\u2013', '--').replace('\u2014', '---')
    text = text.replace('\u00a0', ' ')
    return text

# --- Refine Contently ---
print("=== Refining Contently ===")

# 1. Update longDescription with 2026-specific updates
prompt_longdesc = """Generate a concise 2026 update paragraph (2-3 sentences, ~150 words) for Contently, an enterprise content marketing platform. Include specific 2026 enhancements, new features, or market positioning. Do NOT use backticks, smart quotes, or markdown formatting. Use straight single quotes only."""

new_longdesc_segment = call_qwen(prompt_longdesc)
if new_longdesc_segment:
    new_longdesc_segment = clean_text(new_longdesc_segment)
    print(f"Long desc update: {new_longdesc_segment[:100]}...")

# 2. Update pros with 2026-specific improvements
prompt_pros = """List 3 specific 2026 updates or enhancements for Contently as concise pro statements. Each on a new line starting with a quote. Example format: "AI-powered content gap analysis now covers 12B+ assets for predictive topic scoring"
Do NOT use backticks or smart quotes."""

new_pros = call_qwen(prompt_pros)
if new_pros:
    new_pros = clean_text(new_pros)
    print(f"Pros update: {new_pros[:100]}...")

# 3. Update features
prompt_features = """List 3 specific new 2026 features for Contently platform. Each on a new line in quotes. Example: "AI-Driven Content Personalization Engine"
Do NOT use backticks or smart quotes."""

new_features = call_qwen(prompt_features)
if new_features:
    new_features = clean_text(new_features)
    print(f"Features update: {new_features[:100]}...")

# --- Refine Skyword ---
print("\n=== Refining Skyword ===")

prompt_skyword = """Generate a concise 2026 update paragraph (2-3 sentences, ~150 words) for Skyword, an enterprise content marketing platform. Include specific Q2/Q3 2026 enhancements in AI, compliance, or creator marketplace. Do NOT use backticks, smart quotes, or markdown. Use straight single quotes only."""

skyword_update = call_qwen(prompt_skyword)
if skyword_update:
    skyword_update = clean_text(skyword_update)
    print(f"Skyword update: {skyword_update[:100]}...")

# Save results for the main script
results = {
    "contently_longdesc_update": new_longdesc_segment if new_longdesc_segment else "",
    "contently_pros_update": new_pros if new_pros else "",
    "contently_features_update": new_features if new_features else "",
    "skyword_longdesc_update": skyword_update if skyword_update else "",
}
with open('/tmp/refine_results.json', 'w') as f:
    json.dump(results, f, indent=2)

print("\nDone. Results saved to /tmp/refine_results.json")
