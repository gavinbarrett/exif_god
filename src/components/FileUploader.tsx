import * as React from 'react';
import Dropzone from 'react-dropzone';
import { Prompt } from './Prompt';
import { MetadataField } from './MetadataField';
import './sass/FileUploader.scss';

const FileDisplay = ({exif, updateExif, updateLoading, updateUploadStatus}) => {
	const [path, updatePath] = React.useState('');
	const uploadFile = async () => {
		// add the selected file to a form
        let formData = new FormData();
		formData.append('file', path);
        // retrieve the response from the server
        const resp = await fetch('/upload', { method: 'POST', body: formData });
        updateLoading(true);
		// extract the exif metadata
        const exif_data = await resp.json();
        if (JSON.stringify(exif_data) === '{ error: "no file was found" }' || JSON.stringify(exif_data) === "{}") {
			updateUploadStatus("No metadata found.");
			return;
		}
		updateExif(exif_data);
    }

    const updateFile = file => {
        // update the file path
		updatePath(file[0]);
    }

	const deleteMetadata = async () => {
        let formData = new FormData();
		formData.append('file', path);
        // retrieve the response from the server
        const resp = await fetch('/update', { method: 'POST', body: formData });
		const r = await resp.json();
		if (r && r['exif_free']) {
			let link = document.createElement('a');
			let reader = new FileReader();
			const f = new Blob([r['exif_free']], {"type": "image"});
			reader.readAsDataURL(f);
			reader.onloadend = () => {
				// cast result as a string
				const source: string = reader.result as string;
				// set file source
				link.setAttribute('href', source);
				// set file name
				link.setAttribute('download', path['path']);
				// hide link from view
				link.style.display = 'none';
				// add link to the DOM
				document.body.appendChild(link);
				// wait until the user has selected an option for downloading
				link.click();
				// remove link from the DOM
				document.body.removeChild(link);
			}
		}
	}

	return(<div className="file-uploader">
	<div className="upload-box">
        <Dropzone accept="image/*" onDrop={updateFile}>
            {({getRootProps, getInputProps, isDragActive, isDragReject, acceptedFiles}) => (
                <label htmlFor="file" className="dropper" {...getRootProps()}>
                    <input id="file" name="file" type="file" {...getInputProps()} />
                    {!isDragActive && acceptedFiles.length == 0 && <div className="box-item">{"Click here or drag over a file!"}</div>}
                    {isDragActive && !isDragReject && <div className="box-item">{"Drop your file here!"}</div>}
                    {isDragActive && isDragReject && <div className="box-item">{"Please enter an image file"}</div>}
                    {acceptedFiles.length > 0 && !isDragActive && !isDragReject && <div className="box-item">{acceptedFiles[0].name}</div>}
                </label>
            )}
        </Dropzone>
        <button className="upload" type="submit" onClick={uploadFile}>Upload</button>
	</div>
	<div className="metadata-box">
		{Object.keys(exif).length ? <div className="delete-metadata" onClick={deleteMetadata}>{"Delete Metadata"}</div> : ""}
	</div>
	</div>);
}

const ExifDisplay = ({exif, loading, uploadStatus}) => {
	return (<div className="exif-display">
		{Object.keys(exif).length ? Object.entries(exif).map((data, index) => {
			return <MetadataField key={index} idx={index} type={data[0]} value={data[1]}/>
		}) : <Prompt loading={loading} uploadStatus={uploadStatus}/>}
	</div>);
}

export const FileUploader = () => {
	const [exif, updateExif] = React.useState([]);
	const [loading, updateLoading] = React.useState(false);
	const [uploadStatus, updateUploadStatus] = React.useState("Uploading file...");
	return (<div className="app-body">
		<FileDisplay exif={exif} updateExif={updateExif} updateLoading={updateLoading} updateUploadStatus={updateUploadStatus}/>
		<ExifDisplay exif={exif} loading={loading} uploadStatus={uploadStatus}/>
	</div>);
}
