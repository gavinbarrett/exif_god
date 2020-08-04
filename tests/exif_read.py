import piexif
import exifread
from unittest import TestCase, main

f = open('Linx.JPG', 'rb')

exif = exifread.process_file(f)
for e in exif:
	#print(dir(exif[e]))
	print(f'type: {exif[e].field_type}')
	print(f'printable: {exif[e].printable}')
	print(f'tag: {exif[e].tag}')
	print(f'values {exif[e].values}')
