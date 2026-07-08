with open('carros antigos.html', 'r', encoding='utf-8') as f:
    content = f.read()

html_buttons = """        <div class="controls-bar">
            <div class="view-toggles">
                <button id="gridBtn" class="active" aria-label="Visualização em Grade">📱 Grade</button>
                <button id="listBtn" aria-label="Visualização em Lista">📄 Lista</button>
            </div>
        </div>
        <div class="container" id="car-list">"""

content = content.replace('<div class="container" id="car-list">', html_buttons)

with open('carros antigos.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Buttons injected!")
