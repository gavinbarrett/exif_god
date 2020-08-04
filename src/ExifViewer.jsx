import React, {useEffect} from 'react';
import Repl from './Repl.jsx';

function ExifEntry({i, k, v}) {
    return(<p id='entry'>{i}). {k}: {v}</p>);
}

function ExifEntries({array, jsonData}) {
    let i = 0;
    let exifArray = [];
	let arr = [];
    
	useEffect(() => {
		const exif = document.getElementById('exifarray');
		exif.scrollTop = 0;
	}, [array, exifArray]);

	for (let [key, value] of Object.entries(jsonData)) {
        // stringify any objects
        if (typeof(value) === 'object')
            value = JSON.stringify(value);
        // add the exif data entry to the exif array
        exifArray.push(<ExifEntry key={i} i={i} k={key} v={value}/>);
        // increment the key value
        i++;
		arr.push(value);
    }
	return (<div id='exifarray'>{exifArray}</div>);
}

function ExifViewer({repl, path, array, updateArray, jsonData, updateJsonData}) {
    return (<div id='exifContainer'>
	<div id='exifViewer'>
        {jsonData ? <ExifEntries jsonData={jsonData} array={array} updateArray={updateArray}/> : <p>No exif data</p>}
    </div>
        {repl ? <Repl array={array} jsonData={jsonData} updateJsonData={updateJsonData} path={path}/> : ''}
	</div>);
}

export default ExifViewer;
