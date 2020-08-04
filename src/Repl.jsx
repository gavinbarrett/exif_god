import React, { useState } from 'react';

const crypto = require('crypto');

function Repl({array, path, jsonData}) {

    // keep track of the current state of the repl input
	const [state, changeState] = useState('Enter REMOVE to clear the metadata.\n> ');
    // keep a count of how many characters from the last print
	const [count, changeCount] = useState(0);
    const [input, updateInput] = useState('');
    const [st, upSt] = useState(0);
    const [index, updateIndex] = useState(-1);

    const incCount = (num) => { changeCount(ct => ct + num); }

    const decCount = (num) => { changeCount(ct => ct - num); }
	
	const getFileHash = (str) => {
		let b64str = str.slice(23, str.length);
		let x = atob(b64str);
		const st = new Uint8Array(x.length);
		for (let i = 0; i < x.length; i++)
			st[i] = x[i];
		let hash = crypto.createHash('sha256')
			.update(st)
			.digest('hex');
		return hash + '.jpg';
	}

	const download = (img_src) => {
		let dl_elem = document.createElement('a');
		dl_elem.href = img_src;
		dl_elem.download = getFileHash(img_src);
		dl_elem.style.display = 'none';
		document.body.appendChild(dl_elem);
		dl_elem.click();
		document.body.removeChild(dl_elem);
		console.log('Image downloaded.');
	}

    const updateData = async () => {
        const formData = new FormData();
        formData.append('file', path);
		formData.append('data', JSON.stringify(jsonData));
        const resp = await fetch('/update', {method: 'POST', body: formData});
        await resp.json().then(response => {
			let img = response['exif_free'];
			console.log(img);
			download(img);
		})
    }

	const removeChar = () => {
		// remove the last character from the state
        const nst = state.slice(0, -1);
        // update the state with the new string
		changeState(nst);
		if (input.length > 0) {
            const news = input.slice(0, -1);
            updateInput(news);
        }
		// decrement the character count
		decCount(1);
		console.log('newinput');
		console.log(st);
		console.log(input);
	}

	const printOut = () => {
        // add the prompt to the repl
        addChar('> ');
        // reset input string
	    updateInput('');
	    // reset character counter
		changeCount(0);
	}

    const processString = () => {
        let keys = Object.keys(jsonData);
        if (st === 0) {
            // ready for exif selector input
            let i = parseInt(input);
            if (isNaN(i)) {
                // entered string when a number should have been entered
                if (input === 'UPDATE') {
                    //FIXME: send props.jsonData to the server
                    updateData();
                } 
				else if (input === 'HELP') {
                    addChar('Enter REMOVE to remove metadata.\nEnter CLEAR to clear the shell.\n');
                } else if (input === 'CLEAR') {
                    changeState('');
                } else if (input === 'REMOVE') {
					updateData();
				} else {
                    addChar('Please enter a valid command. Use command "HELP" for help.\n');
                }
                printOut();

                // check to see if input number is a valid index
            } else if (i < keys.length){
                updateIndex(i);
                // change to state 1 where we
                upSt(1);
                // add both strings to the textarea
                addChar(keys[i] + ': ');
                updateInput('');
                changeCount(0);
                // add the modifiable input to the textarea
                addChar(array[i]);
                // add the modifiable input to the input variable
                updateInput(array[i]);
                incCount(array[i].toString().length);
            } else {
                addChar('Please enter a valid exif index.\n');
                printOut();
            }
        } else if (st === 1) {
            // update the in-browser json
            updateJsonData(obj => ({
                ...obj,
                [keys[index]]: input
            }));
            addChar('Enter the index you would like to modify\n');
            printOut();
            upSt(0);
        }
    }

    const readInput = (event) => {
        /*
        This is the beginning of a small repl. We need to make sure to only print printable characters.
        Arrow keys will retrieve the repl history.
        Once we hit enter, we can process the string
        */
		console.log('code');
        console.log(event.keyCode);
		if ((event.keyCode === 8) && (count > 0))
            removeChar();
        else if (event.keyCode === 8) {
        } else if (event.keyCode === 13) {
            addChar(String.fromCharCode(event.keyCode));
            processString();
		} else if (event.keyCode === 38) { 
			console.log('up arrow');
		} else if (event.keyCode === 40) {
			console.log('down arrow');
		} else if (event.keyCode === 37) { 
			console.log('left arrow');
		}  else if (event.keyCode === 39) {
			console.log('right arrow');
		} else if ((event.keyCode > 19) && (event.keyCode < 127)) {
			addChar(String.fromCharCode(event.keyCode));
            incCount(1);
        } else {
            console.log('input error');
        }
    }

	window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

    const addChar = (character) => {
        // add a character to the input
        updateInput(i => i + character);
        // add a character to state
        changeState(st => st + character);
    }

	return (<div id='repl'>
	<textarea value={state} onChange={() => {}} onKeyDown={readInput} tabIndex={0} spellCheck='false' id='r'/>
	</div>);
}

export default Repl;
