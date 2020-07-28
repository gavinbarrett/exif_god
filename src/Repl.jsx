import React, { useState } from 'react';

function Repl(props) {

    // keep track of the current state of the repl input
	const [state, changeState] = useState('Enter the index you would like to modify\n> ');
    // keep a count of how many characters from the last print
	const [count, changeCount] = useState(0);
    const [input, updateInput] = useState('');
    const [st, upSt] = useState(0);

    const incCount = (num) => { changeCount(ct => ct + num); }

    const decCount = (num) => { changeCount(ct => ct - num); }

	const removeChar = () => {
		// remove the last character from the state
        const nst = state.slice(0, -1);
        // update the state with the new string
		changeState(nst);
		// decrement the character count
		decCount(1);
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
        console.log(st);
        console.log(input);
        if (st === 0) {
            // ready for exif selector input
            let i = parseInt(input);
            //FIXME: check to see that we have enough indices
            if (isNaN(i)) {
                // entered string when a number should have been entered
                if (input === 'UPDATE') {
                    alert('Updating JSON');

                } else if (input === 'HELP') {
                    addChar('Enter a number from the list above to modify it.\nEnter UPDATE to update the file.\n');
                } else if (input === 'CLEAR') {
                    changeState('');
                } else {
                    addChar('Please enter a valid command. Use command "HELP" for help.\n');
                }
                printOut();
            } else {
                // change to state 1 where we
                upSt(1);
                console.log('array');
                // add both strings to the textarea
                let keys = Object.keys(props.jsonData);
                addChar(keys[i] + ': ');
                //addChar(': ');
                updateInput('');
                changeCount(0);
                addChar(props.array[i]);
                addChar(' ');
                updateInput(props.array[i]);
                incCount(props.array[i].toString().length+1);
                console.log('count');
                console.log(count);
            }
        } else if (st === 1) {
            // process entered string
            //FIXME: add new value to the jsonData that will later be loaded into a form
            addChar('Enter the index you would like to modify\n');
            printOut();
            upSt(0);
        }
    }

    const back = (event) => {
        /*
        This is the beginning of a small repl. We need to make sure to only print printable characters.
        Once we hit enter, we can process the string
        */
        if ((event.keyCode === 8) && (count > 0))
            removeChar();
        else if (event.keyCode === 8) {
        } else if (event.keyCode === 13) {
            addChar(String.fromCharCode(event.keyCode));
            incCount(1);
            processString();
			//printOut();
		} else if ((event.keyCode > 19) && (event.keyCode < 127)) {
            addChar(String.fromCharCode(event.keyCode));
            incCount(1);
        } else {
            console.log('nope');
        }
    }

    const addChar = (character) => {
        // add a character to the input
        updateInput(i => i + character);
        // add a character to state
        changeState(st => st + character);
    }

	return (<div id='repl'>
    <textarea value={state} onChange={() => {}} onKeyDown={back} tabIndex={0} spellCheck='false' id='r'/>
	</div>);
}

export {
	Repl
}
