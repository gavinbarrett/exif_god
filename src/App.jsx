import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';

function FileUploader() {
	// create a hook for the file path
	const [path, updatePath] = useState('');

	const uploadFile = async () => {
		// add the selected file to a form
		let formData = new FormData();
		formData.append('file', path);
		// retrieve exif metadata
		const resp = await fetch('/upload', { method: 'POST', body: formData });
		console.log(resp);
	}

	const update = async event => {
		// update the file path
		await updatePath(event.target.files[0]);
	}

	const dropFile = async event => {
		alert(event.target.files[0]);
	}

	return (<div id='fileUploader'>
	{/*<input type='file' accept='image/*' onChange={(e) => update(e)}/>*/}
	{/*<button id='upload' type='submit' onClick={() => uploadFile()}>Upload</button>*/}
	<Dropzone id='dropzone' accept='image/*' onDrop={file => dropFile(file)}>
	 		{({getRootProps, getInputProps, isDragActive, isDragReject, acceptedFiles}) => (
    	<div id="dropper" {...getRootProps()}>
      	<input type="file" {...getInputProps()} />
      	{!isDragActive && acceptedFiles.length == 0 && "Click here or drag a file to upload!"}
		{isDragActive && !isDragReject && "Drop your file here!"}
		{isDragActive && isDragReject && "Please enter an image file"}
		{acceptedFiles.length > 0 && !isDragActive && !isDragReject && acceptedFiles[0].name}
		</div>
  	)}
	</Dropzone>
	</div>);
}

function ExifViewer() {
	return (<div id='exifViewer'>
		<p>ExifViewer</p>
	</div>);
}

function Page() {
	return (<div id='page'>
	<FileUploader/>
	<ExifViewer/>
	</div>);
}

function Heading(props) {
	return(<div id='heading'>
		{props.title}
	</div>);
}

function App() {
	return (<div id='app'>
		<Heading title={'exif god'}/>
		<Page/>
	</div>);
}

ReactDOM.render(<App/>, document.getElementById('root'));
