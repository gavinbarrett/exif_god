from io import BytesIO
from PIL import Image, ExifTags

def read_exif(img_data):
	# open the image
	image = Image.open(BytesIO(img_data.read()))
	# return the exif data
	ex_data = image._getexif()
	collection = {}
	for key, value in ex_data.items():
		collection[ExifTags.TAGS.get(key)] = value
	return collection
