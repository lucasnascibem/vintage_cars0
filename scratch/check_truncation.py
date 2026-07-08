path = "/home/lucas/.gemini/antigravity/brain/6e1e4499-1000-4f73-af02-791b592e84c7/.system_generated/logs/overview.txt"
with open(path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        print(f"Line {i}: length {len(line)}, has truncated: {'truncated' in line}")
