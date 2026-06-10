#!/usr/bin/env python3
"""Configure git credential and push."""
import subprocess
import sys

# Get GitHub token
with open('/home/edi/.hermes/api_keys.env', 'rb') as f:
    raw = f.read().decode('latin-1')

token = None
for line in raw.split('\n'):
    if line.startswith('GITHUB_TOKEN='):
        token = line.split('=', 1)[1].strip()
        break

if not token:
    print("ERROR: GitHub token not found!")
    sys.exit(1)

print(f"Token: {token[:8]}...")

# Configure git credential
credential = f"url=https://github.com/longfeixiang7650-dotcom/freelancepicks\nusername=token\npassword={token}"
result = subprocess.run(
    ["git", "credential", "approve"],
    input=credential,
    capture_output=True,
    text=True,
    cwd="/home/edi/freelancepicks-hub"
)
print(f"Credential approve: {result.stdout} - {result.stderr}")

# Add files
result = subprocess.run(["git", "add", "-A"], cwd="/home/edi/freelancepicks-hub", capture_output=True, text=True)
print(f"Git add: {result.stdout} - {result.stderr}")

# Commit
today = "2026-06-10"
result = subprocess.run(
    ["git", "commit", "-m", f"daily update: {today}"],
    cwd="/home/edi/freelancepicks-hub",
    capture_output=True, text=True
)
print(f"Git commit: {result.stdout} - {result.stderr}")

# Push via proxy
env = {"https_proxy": "http://127.0.0.1:7890", "GIT_HTTP_POSTBUFFER": "524288000"}
result = subprocess.run(
    ["git", "push"],
    cwd="/home/edi/freelancepicks-hub",
    env={**subprocess.os.environ, **env},
    capture_output=True, text=True
)
print(f"Git push: {result.stdout}")
if result.stderr:
    print(f"Git push stderr: {result.stderr}")

print("\n=== DONE ===")
