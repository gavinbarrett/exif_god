from modules.exif import read_exif
from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
	if 'file' not in request.files:
		return jsonify({'err':'no file'})
	r = request.files['file']
	print(r)
	read_exif()
	return {'succ':'got file'}

@app.route('/', methods=['GET'])
def render():
	return render_template('index.html')

if __name__ == '__main__':
	app.run(threaded=True)
