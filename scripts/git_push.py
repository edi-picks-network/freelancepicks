#!/usr/bin/env python3
"""Git add, commit, and push with token from /tmp/daily_keys.json"""
import json
import subprocess
import os

# Try to read the token
token = None
token_paths = ['/tmp/daily_keys.json', '/tmp/gh_token.txt']

for tp in token_paths:
    if os.path.exists(tp):
        with open(tp) as f:
            if tp.endswith('.json'):
                data = json.load(f)
                token = data.get('GITHUB_TOKEN')
            else:
                token = f.read().strip()
        break

if not token:
    # Try env file approach
    env_file = os.path.expanduser("~/.hermes/api_keys.env")
    if os.path.exists(env_file):
        with open(env_file, 'r') as f:
            for line in f:
                line = line.strip()
                if line.startswith('GITHUB_TOKEN='):
                    token = line.split('=', 1)[1].strip('"').strip("'")
                    if '***' in token:
                        token = None
                    break

if not token:
    print("ERROR: Could not find GitHub token")
    exit(1)

print(f"Token found: {token[:10]}...{token[-4:]}")

repo_dir = "/home/edi/freelancepicks-hub"
owner = "edi-picks-network"
repo = "freelancepicks"

# Configure remote URL with token
remote_url = f"https://{token}@github.com/{owner}/{repo}.git"

# Set remote
subprocess.run(["git", "remote", "set-url", "origin", remote_url], cwd=repo_dir, capture_output=True)

# Git add
result = subprocess.run(["git", "add", "-A"], cwd=repo_dir, capture_output=True, text=True)
if result.returncode != 0:
    print(f"git add error: {result.stderr}")
    exit(1)
print("Git add -A: OK")

# Git status
result = subprocess.run(["git", "status", "--short"], cwd=repo_dir, capture_output=True, text=True)
print(f"Files to commit:\n{result.stdout}")

# Git commit
result = subprocess.run(
    ["git", "commit", "-m", "Daily update 2026-07-30: Refined contently+skyword, added freelance contract templates blog"],
    cwd=repo_dir, capture_output=True, text=True
)
print(f"Git commit: {result.stdout.strip()}")
if result.returncode != 0:
    print(f"Commit stderr: {result.stderr.strip()}")

# Git push
print("Pushing to origin main...")
result = subprocess.run(["git", "push", "origin", "main"], cwd=repo_dir, capture_output=True, text=True, timeout=60)
print(f"Push stdout: {result.stdout.strip()}")
if result.returncode != 0:
    print(f"Push stderr: {result.stderr.strip()}")
else:
    print("Push: SUCCESS!")

# Remove token from remote URL for security
subprocess.run(["git", "remote", "set-url", "origin", f"https://github.com/{owner}/{repo}.git"], cwd=repo_dir, capture_output=True)
print("Remote URL reset (token removed)")
