import json
from modules.exif import read_exif
from flask import Flask, jsonify, request, render_template
from PIL import TiffImagePlugin

app = Flask(__name__)

def decode(data):
	res = {}
	for key, value in data.items():
		if isinstance(value, bytes):
			value = value.decode('cp1251')
		elif isinstance(value, dict):
			value = decode(value)
		res[key] = value
	return res

@app.route('/upload', methods=['POST'])
def upload():
	if 'file' not in request.files:
		return jsonify({'err':'no file'})
	r = request.files['file']
	data = read_exif(r)
	data.pop('MakerNote')
	for k,v in data.items():
		if isinstance(v, bytes):
			data[k] = v.decode()
		if isinstance(v, TiffImagePlugin.IFDRational):
			print('found ifdrational')
			data[k] = float(v.__float__())
		#FIXME: decode PIL.TiffImagePlugin.IFDRational
		print(f'{type(k)} {type(v)}')
	print(data)

	return json.dumps(data)

@app.route('/', methods=['GET'])
def render():
	return render_template('index.html')

if __name__ == '__main__':
	app.run(threaded=True)
