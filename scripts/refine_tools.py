#!/usr/bin/env python3
"""Refine 3 freelance tools via Qwen API."""
import json
import re
import sys

# Read QWEN API key from env file
with open('/home/edi/.hermes/api_keys.env', 'rb') as f:
    raw = f.read().decode('latin-1')

qwen_key = None
for line in raw.split('\n'):
    if line.startswith('QWEN_API_KEY_1='):
        qwen_key = line.split('=', 1)[1].strip()
        break

if not qwen_key:
    print("ERROR: Could not find QWEN_API_KEY_1")
    sys.exit(1)

print(f"Using QWEN key starting with: {qwen_key[:10]}...")

# Read the tools.ts file
with open('/home/edi/freelancepicks-hub/app/data/tools.ts', 'r') as f:
    tools_content = f.read()

# Extract the current tools data for the 3 tools we need to refine
# Tools to refine: freelancer, designcrowd, clearvoice
tools_to_refine = ['freelancer', 'designcrowd', 'clearvoice']

# For each tool, extract the full entry
for tool_id in tools_to_refine:
    # Find the tool entry
    pattern = rf'  \{{\n    id: \"{tool_id}\",\n.*?(?=\n  \}}|\n\];)'
    match = re.search(pattern, tools_content, re.DOTALL)
    if match:
        print(f"\n=== {tool_id}: found entry ===")
        entry = match.group(0)
        # Extract current longDescription
        ld_match = re.search(r'longDescription:\s*\n\s*\"(.*?)\"(?=\s*\n\s*pros)', entry, re.DOTALL)
        if ld_match:
            current_ld = ld_match.group(1)
            print(f"Current longDescription length: {len(current_ld)} chars")
    else:
        print(f"\n=== {tool_id}: NOT FOUND ===")

print("\nScript ready. Will now call Qwen API for each tool.")
