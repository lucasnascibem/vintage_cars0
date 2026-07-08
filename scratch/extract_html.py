import json
import ast

path = "/home/lucas/.gemini/antigravity/brain/6e1e4499-1000-4f73-af02-791b592e84c7/.system_generated/logs/overview.txt"
with open(path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            if "tool_calls" in data:
                for tc in data["tool_calls"]:
                    if tc["name"] == "write_to_file":
                        args = tc["args"]
                        target = args.get("TargetFile", "")
                        if "carros antigos.html" in target:
                            print(f"Found writing to: {target}")
                            content = args.get("CodeContent", "")
                            print("Type of content:", type(content))
                            print("Starts with quote:", content.startswith('"'))
                            print("Ends with quote:", content.endswith('"'))
                            
                            # Let's try decoding it using json.loads
                            try:
                                decoded = json.loads(content)
                                print("json.loads worked!")
                                content = decoded
                            except Exception as e:
                                print("json.loads failed:", e)
                                try:
                                    decoded = ast.literal_eval(content)
                                    print("ast.literal_eval worked!")
                                    content = decoded
                                except Exception as e2:
                                    print("ast.literal_eval failed:", e2)
                                    # Fallback manual cleaning if needed
                                    if content.startswith('"') and content.endswith('"'):
                                        content = content[1:-1]
                                    content = content.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                            
                            with open("scratch/extracted_base.html", "w", encoding="utf-8") as out:
                                out.write(content)
                            print("Wrote decoded to scratch/extracted_base.html")
        except Exception as e:
            print("Err:", e)
