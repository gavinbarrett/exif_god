import React, {useEffect} from 'react';
import { Repl } from './Repl.jsx';

function ExifEntry(props) {
    return(<p id='entry'>{props.i}). {props.k}: {props.v}</p>);
}

function ExifEntries(props) {
    let i = 0;
    let exifArray = [];
	let arr = [];
    
	useEffect(() => {
		console.log('Rendering exif');
	}, [props.array]);

	for (let [key, value] of Object.entries(props.jsonData)) {
        // stringify any objects
        if (typeof(value) === 'object')
            value = JSON.stringify(value);
        // add the exif data entry to the exif array
        exifArray.push(<ExifEntry key={i} i={i} k={key} v={value}/>);
        // increment the key value
        i++;
		arr.push(value);
    }
	console.log('array');
    console.log(props.array);
	return (<div>{exifArray}</div>);
}

function ExifViewer(props) {
    return (<div id='exifContainer'>
	<div id='exifViewer'>
        {props.jsonData ? <ExifEntries jsonData={props.jsonData} array={props.array} updateArray={props.updateArray}/> : <p>No exif data</p>}
    </div>
	<Repl array={props.array} jsonData={props.jsonData} updateJsonData={}/>
	</div>);
}

export {
    ExifViewer
}
