import re
import json

with open("carros antigos.html", "r", encoding="utf-8") as f:
    content = f.read()

# Extract carsData
match = re.search(r'const carsData = (\[.*?\]);', content, re.DOTALL)
if match:
    cars_data_str = match.group(1)
    # The JSON might not be strict JSON (keys without quotes). 
    # Actually, we can just replace the base64 strings with paths using regex.
    # Let's read the object keys and rebuild it or just regex replace 'data:image...' with the paths.
    
    # We know the cars and their images:
    image_map = {
        'fusca': 'imagens/fusca.webp',
        'opala': 'imagens/opala 1978.webp',
        'corcel': 'imagens/corcel.jpg.webp',
        'fiat147': 'imagens/fiat 147.webp',
        'landau': 'imagens/ford landau1980.webp',
        'maverick': 'imagens/maverick.jpg'
    }

    # Regex to find id and replace its image
    for car_id, img_path in image_map.items():
        # This is a bit tricky because the image is inside the object.
        pass

    # Better approach: parse with JS via Node
