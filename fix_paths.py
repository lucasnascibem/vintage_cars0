import re

with open('carros antigos.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Fusca
content = re.sub(r"image:\s*'./imagens/IMG_2328\.webp'", "image: './imagens/fusca.webp'", content)
# Replace Opala
content = re.sub(r"image:\s*'./imagens/IMG_2384-768x586\.jpg\.webp'", "image: './imagens/opala 1978.webp'", content)
# Replace Corcel (catch base64)
content = re.sub(r"image:\s*'data:image/webp;base64,[A-Za-z0-9+/=]+'", "image: './imagens/corcel.jpg.webp'", content)
# Replace Fiat
content = re.sub(r"image:\s*'./imagens/fiat 147\.jpg'", "image: './imagens/fiat 147.webp'", content)
# Replace Landau
content = re.sub(r"image:\s*'./imagens/Sem t[íi]tulo\.jpg'", "image: './imagens/ford landau1980.webp'", content)
# Replace Maverick
content = re.sub(r"image:\s*'./imagens/images\.jpg'", "image: './imagens/ford maverick 1973.jpg'", content)

with open('carros antigos.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Paths fixed!")
