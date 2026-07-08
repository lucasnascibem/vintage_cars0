import os
import json
import re

brain_dir = "/home/lucas/.gemini/antigravity/brain"
matches = []

for root, dirs, files in os.walk(brain_dir):
    for file in files:
        if file == "overview.txt":
            path = os.path.join(root, file)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                # Find occurrences of write_to_file or similar that write to carros antigos.html
                # Let's search for "carros antigos.html" in the content
                if "carros antigos.html" in content:
                    # Let's look for json objects/lines
                    for line in content.splitlines():
                        if "carros antigos.html" in line and "CodeContent" in line:
                            matches.append((path, line[:200] + "..."))
            except Exception as e:
                pass

print(f"Found {len(matches)} matches:")
for m in matches[:15]:
    print(m)
