import * as React from 'react';
import './sass/Prompt.scss';

type prompt = {
	loading: boolean;
	uploadStatus: string;
};

export const Prompt = ({loading, uploadStatus}:prompt) => {
	return (<div className="prompt-container">
			{loading ? <p className="prompt-line">{uploadStatus}</p> : <p className="prompt-line">{"Upload an image file to analyze it's EXIF metadata and feel free to wipe it all."}</p>}
	</div>);
}
