from io import BytesIO
from PIL import Image, ExifTags, TiffImagePlugin

def decode(ex_data):
	if ex_data is None:
		return
	collection = {}
	for key, value in ex_data.items():
		# decode bytes
		if isinstance(value, bytes):
			value = value.decode('unicode_escape')
		# convert IFDRational to the float class
		if isinstance(value, TiffImagePlugin.IFDRational):
			value = float(value.real)
		# recursively decode a dictionary
		if isinstance(value, dict):
			value = decode(value)
		# decode any IFDRational objects found in a tuple
		if isinstance(value, tuple):
			value = tuple(map(lambda x: float(x.real), value))
		# add the decoded value to the dictionary
		collection[ExifTags.TAGS.get(key)] = value
	return collection

def read_exif(img_data):
	# open the image
	image = Image.open(BytesIO(img_data.read()))
	# extract the exif data
	exif_data = image._getexif()
	# decode the object to enable serialization
	return decode(exif_data)
