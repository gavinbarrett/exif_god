import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

function Heading() {
	return (<div id='heading'>
			{'Exif God'}
		</div>);
}

function FileUploader(props) {
    // create a hook for the file path
    const [path, updatePath] = useState('');

    const uploadFile = async () => {
        // add the selected file to a form
        let formData = new FormData();
        formData.append('file', path);
        // retrieve the response from the server
        const resp = await fetch('/upload', { method: 'POST', body: formData });
        // extract the exif metadata
        const exif_data = await resp.json();
        console.log(exif_data);
        //if (JSON.stringify(exif_data) === '{ error: "no file was found" }')
         //   alert('nooo');
        //FIXME: if the response is not {error: no file was sent}, display to the user
        // add JSON data to the ExifViewer
        props.updateJsonData(exif_data);
    }

    const updateFile = async file => {
        // update the file path
        await updatePath(file[0]);
    }

    return (<div>
	<Heading/>
	<div id='fileUploader'>
        <Dropzone id='dropzone' accept='image/*' onDrop={file => updateFile(file)}>
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
        <button id='upload' type='submit' onClick={() => uploadFile()}>Upload</button>
    </div>
	</div>);
}

export {
    FileUploader
}
