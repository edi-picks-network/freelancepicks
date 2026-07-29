#!/usr/bin/env python3
"""Insert the new blog entry into blog-posts.ts before the final `];` line."""
import re

with open('/tmp/full_blog.txt', 'r') as f:
    blog_text = f.read()

# Clean the text
blog_text = blog_text.replace('`', "'")  # replace backticks with single quotes

# Read current blog-posts.ts
with open('/home/edi/freelancepicks-hub/app/data/blog-posts.ts', 'r') as f:
    ts_content = f.read()

# Build the new entry - slug based on title
slug = "freelance-contract-templates-2026"

# Extract title, excerpt, content from blog_text
lines = blog_text.split('\n')
title_line = lines[0].replace('# ', '').strip()

# Extract excerpt (first substantive paragraph)
excerpt = ""
for line in lines:
    stripped = line.strip()
    if stripped and not stripped.startswith('#') and not stripped.startswith('By ') and not stripped.startswith('Published') and not stripped.startswith('Category') and not stripped.startswith('Read time'):
        excerpt = stripped[:200]
        break

# The content is the blog_text as markdown - clean up
# Remove the metadata lines (By, Published, Category, Read time)
content_lines = []
for line in lines:
    stripped = line.strip()
    if stripped.startswith('By ') or stripped.startswith('Published:') or stripped.startswith('Category:') or stripped.startswith('Read time:'):
        continue
    content_lines.append(line)

content = '\n'.join(content_lines).strip()

# Add trailing newline for the template literal
content = content + '\n'

# Build the new blog entry
new_entry = f"""{{
    slug: "{slug}",
    title: "{title_line}",
    excerpt: "{excerpt}",
    content: `{content}`,
    author: "Sarah Mitchell",
    authorRole: "Freelance Business Attorney & Contract Advisor",
    date: "2026-07-30",
    category: "Freelance Business",
    readTime: 12,
    tags: ["freelance contracts", "contract templates", "freelance legal", "SOW", "IP ownership", "arbitration", "NDA", "payment terms", "scope of work", "digital signatures"],
  }},
"""

# Find the last `];` and insert before it
# The file ends with `};\n` (last entry comma + `];`)
insert_pos = ts_content.rfind('\n];')
if insert_pos == -1:
    # Try without newline
    insert_pos = ts_content.rfind('];')

if insert_pos >= 0:
    new_ts = ts_content[:insert_pos] + '\n' + new_entry + '];'
else:
    print("ERROR: Could not find ]; insertion point")
    sys.exit(1)

with open('/home/edi/freelancepicks-hub/app/data/blog-posts.ts', 'w') as f:
    f.write(new_ts)

print(f"Inserted new blog entry '{slug}'")
print(f"New file size: {len(new_ts)} chars")

# Verify the file structure
if new_ts.count('];') == 1:
    print("OK: Single ]; found (correct)")
else:
    print(f"WARNING: Found {new_ts.count('];')} instances of ];")

# Count blog posts
slug_count = new_ts.count("slug: \"")
print(f"Total slug entries: {slug_count}")
