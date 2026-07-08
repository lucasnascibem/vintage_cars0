import re

with open("carros antigos.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Replace the entire <style> block with <link rel="stylesheet" href="css/style.css">
content = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="css/style.css">', content, flags=re.DOTALL)

# 2. Extract the main.js logic (from document.addEventListener to the end)
# We know it starts at document.addEventListener('DOMContentLoaded', function () {
main_js_match = re.search(r'(document\.addEventListener\(\'DOMContentLoaded\', function \(\) \{.*?\n        \}\);)', content, flags=re.DOTALL)
if main_js_match:
    main_js_code = main_js_match.group(1)
    with open("js/main.js", "w", encoding="utf-8") as f:
        f.write(main_js_code)
    print("js/main.js created.")

# 3. Replace the entire <script> block with external references
script_replacement = """<script src="js/dados.js"></script>
    <script src="js/main.js"></script>"""
content = re.sub(r'<script>\s*const carsData.*?\}\);\s*</script>', script_replacement, content, flags=re.DOTALL)

with open("carros antigos.html", "w", encoding="utf-8") as f:
    f.write(content)
print("carros antigos.html updated.")
