with open("carros antigos.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

css_lines = lines[10:398]
with open("css/style.css", "w", encoding="utf-8") as f:
    f.writelines(css_lines)

print("CSS extracted.")
