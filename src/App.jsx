import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ExifViewer } from "./ExifViewer";
import { FileUploader } from "./FileUploader";

function App() {
	const [jsonData, updateJsonData] = useState(null);
	return (<div id='app'>
		<div id='heading'>
			{'exif_god'}
		</div>
		<div id='page'>
			<FileUploader updateJsonData={updateJsonData}/>
			<ExifViewer jsonData={jsonData}/>
		</div>
	</div>);
}

ReactDOM.render(<App/>, document.getElementById('root'));