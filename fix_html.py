import re

# 1. Read the base64 font
with open('fonts/dog-days.b64', 'r') as f:
    b64_font = f.read().strip()

# 2. Read the HTML
with open('carros antigos.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 3. Replace font URL with base64 data URI
font_replacement = f"url('data:font/opentype;base64,{b64_font}') format('opentype');"
content = re.sub(r"url\('\./fonts/dog-days-brush\.otf'\)\s+format\('opentype'\);", font_replacement, content)

# 4. Replace image paths to user's original files
content = content.replace("image: './imagens/volkswagen-fusca.jpg'", "image: './imagens/IMG_2328.webp'")
content = content.replace("image: './imagens/chevrolet-opala.jpg'", "image: './imagens/IMG_2384-768x586.jpg.webp'")
content = content.replace("image: './imagens/ford-corcel.jpg'", "image: './imagens/corcel.jpg.webp'")
content = content.replace("image: './imagens/fiat-147.jpg'", "image: './imagens/fiat 147.jpg'")
content = content.replace("image: './imagens/ford-landau.jpg'", "image: './imagens/Sem título.jpg'")
content = content.replace("image: './imagens/ford-maverick.jpg'", "image: './imagens/images.jpg'")

# 5. Write back
with open('carros antigos.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("HTML fixed successfully.")
