import json
import piexif
import exifread
from PIL import Image
from io import BytesIO
from decimal import Decimal
from base64 import b64encode
from collections import defaultdict
from modules.exif import read_exif
from modules.dicts import exif_tags
from modules.keys import get_exif_key
from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
	if 'file' not in request.files:
		return jsonify({'error':'no file was found'})
	# retrieve the file
	f = request.files['file']
	# read and decode the exif data
	#data = read_exif(f)
	data = exifread.process_file(f)
	exif_data = {k:v.printable for k,v in data.items() if not isinstance(v, bytes)}
	# return the serialized exif object
	return json.dumps(exif_data)

@app.route('/update', methods=['POST'])
def update():
	if 'data' not in request.form:
		return jsonify({'error':'no exif data was found'})
	if 'file' not in request.files:
		return jsonify({'error':'no file was found'})
	r = request.files['file']
	# retrieve the file
	f = request.form['data']
	# open the image
	# load the exif from the image
	im = Image.open(BytesIO(r.read()))
	exif = exifread.process_file(r)
	e = json.loads(f)
	newarr = defaultdict(lambda: None)
	for c in e:
		if (c[0:4] == 'EXIF'):
			exif[c] = e[c]
			print(c)
			print(e[c])
			newarr[c] = e[c]
	Ex_dif = {'Exif': newarr}

	# turn the exif dictionary into the appropriate bytes
	exif_bytes = piexif.dump(Ex_dif)
	# create a new bytesio to store the image
	new_image = BytesIO()
	# 
	im.save(new_image, 'jpeg', exif=exif_bytes)
	# get the bytes
	bys = new_image.getvalue()
	serialized = b64encode(bys).decode('utf-8')	
	serialized = f'data:image/jpeg;base64,{str(serialized)}'
	return jsonify({'exif_free':serialized})


@app.route('/', methods=['GET'])
def render():
	return render_template('index.html')

if __name__ == '__main__':
	app.run(host='0.0.0.0')
