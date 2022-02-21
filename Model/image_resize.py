from PIL import Image
img = Image.open('imgs/no_makeup/choooi.png').convert('RGB')
img.save('imgs/no_makeup/choooi_result.png')
