from rembg import remove

input_path = "public/Main Hero Image.jpeg"
output_path = "public/hero-face.png"

print("Removing background...")
with open(input_path, "rb") as i:
    with open(output_path, "wb") as o:
        input_data = i.read()
        output_data = remove(input_data)
        o.write(output_data)

print("Saved cleanly to " + output_path)
