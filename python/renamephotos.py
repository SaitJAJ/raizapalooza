import os

# put your own path in here to bulk rename photos
path = "C:/Users/jahsa/raizapalooza/public/Gallery Photos"
list_of_files = os.listdir(path)

for i, file in enumerate(list_of_files):
  file_to_replace = path + "/" + file
  os.rename(file_to_replace, f"{path}/{i}.jpg")
  print(f"Renamed {file} to {i}.jpg")