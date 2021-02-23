import * as React from 'react';
import './sass/Footer.scss';

export const Footer = () => {
	return (<footer>
		<div className='footer-box'>
			<div className="footer-text"><a className="source-code" href={"https://github.com/gavinbarrett/exif_god"}>Source Code</a></div>
			<div className="footer-text">Exif God &copy; 2021</div>
		</div>
	</footer>);
}
