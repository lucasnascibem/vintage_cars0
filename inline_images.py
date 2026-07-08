import re
import base64
import mimetypes

def get_base64_data_uri(filepath):
    mime_type, _ = mimetypes.guess_type(filepath)
    if not mime_type:
        mime_type = 'image/jpeg'
    with open(filepath, 'rb') as f:
        data = f.read()
    b64 = base64.b64encode(data).decode('utf-8')
    return f"data:{mime_type};base64,{b64}"

image_mapping = {
    "./imagens/fusca.webp": "imagens/fusca.webp",
    "./imagens/opala 1978.webp": "imagens/opala 1978.webp",
    "./imagens/corcel.jpg.webp": "imagens/corcel.jpg.webp",
    "./imagens/fiat 147.webp": "imagens/fiat 147.webp",
    "./imagens/ford landau1980.webp": "imagens/ford landau1980.webp",
    "./imagens/ford maverick 1973.jpg": "imagens/ford maverick 1973.jpg"
}

with open('carros antigos.html', 'r', encoding='utf-8') as f:
    content = f.read()

for html_path, fs_path in image_mapping.items():
    try:
        data_uri = get_base64_data_uri(fs_path)
        content = content.replace(f"image: '{html_path}'", f"image: '{data_uri}'")
    except Exception as e:
        print(f"Error encoding {fs_path}: {e}")

with open('carros antigos.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Images successfully inlined!")
