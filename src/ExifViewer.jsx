import React from 'react';

function ExifEntry(props) {
    return(<li>
        <p id='entry'>{props.k}: {props.v}</p>
    </li>);
}

function ExifEntries(props) {
    let i = 0;
    let exifArray = [];
    for (let [key, value] of Object.entries(props.jsonData)) {
        // stringify any objects
        if (typeof(value) === 'object')
            value = JSON.stringify(value);
        // add the exif data entry to the exif array
        exifArray.push(<ExifEntry key={i} k={key} v={value}/>);
        // increment the key value
        i++;
    }
    return (<div>{exifArray}</div>);
}

function ExifViewer(props) {
    return (<div id='exifViewer'>
        {props.jsonData ? <ExifEntries jsonData={props.jsonData}/> : <p>No exif data</p>}
    </div>);
}

export {
    ExifViewer
}