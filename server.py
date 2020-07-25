import json
from modules.exif import read_exif
from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
	if 'file' not in request.files:
		return jsonify({'error':'no file was found'})
	# retrieve the file
	r = request.files['file']
	# read and decode the exif data
	data = read_exif(r)
	# return the serialized exif object
	return json.dumps(data)

@app.route('/', methods=['GET'])
def render():
	return render_template('index.html')

if __name__ == '__main__':
	app.run(threaded=True)
