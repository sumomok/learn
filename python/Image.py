from PIL import Image
from PIL import ImageFilter

im=Image.open('./timg.jpg')

coutour=im.filter(ImageFilter.CONTOUR)
coutour.save('./test.jpg')