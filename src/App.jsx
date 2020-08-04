import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ExifViewer from "./ExifViewer";
import FileUploader from "./FileUploader";

function Exif_God() {
	const [jsonData, updateJsonData] = useState(null);
	const [array, updateArray] = useState([]);
	const [path, updatePath] = useState('');
	const [repl, toggleRepl] = useState(false);
	let arr = [];
	useEffect(() => {
		if (!jsonData)
			return;
		arr = [];
		for (let i in jsonData)
			arr.push(jsonData[i]);
		updateArray(arr);
	}, [jsonData]);

	return (<div id='page'>
			<FileUploader updateJsonData={updateJsonData} path={path} updatePath={updatePath} toggleRepl={toggleRepl}/>
			<ExifViewer array={array} updateArray={updateArray} jsonData={jsonData} updateJsonData={updateJsonData} path={path} repl={repl}/>
		</div>);
}

ReactDOM.render(<Exif_God/>, document.getElementById('root'));
