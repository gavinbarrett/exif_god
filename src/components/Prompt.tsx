import * as React from 'react';
import './sass/Prompt.scss';

export const Prompt = () => {
	return (<div className="prompt-container">
		<p className="prompt-line">{"Upload an image file to analyze it's EXIF metadata and feel free to wipe it all."}</p>
	</div>);
}
