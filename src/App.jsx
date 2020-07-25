import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {

	const [path, updatePath] = useState('');

	let uploadFile = async () => {
		let formData = new FormData();
		formData.append('file', path);
		console.log(path);
		const resp = await fetch('/upload', { method: 'POST', body: formData });
		let j = await resp.json();
		console.log(j);
	}

	let update = async (event) => {
		await updatePath(event.target.files[0]);
	}

	return (<div>
	<input type='file' accept='image/*' onChange={(e) => update(e)}/>
	<button type='submit' onClick={() => uploadFile()}>Upload</button>
	</div>);
}

ReactDOM.render(<App/>, document.getElementById('root'));
