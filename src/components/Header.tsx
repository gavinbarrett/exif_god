import * as React from 'react';
import './sass/Header.scss';

export const Header = () => {
	return (<header>
		<p className="header-text">{"Exif God"}</p>
		<p className="header-desc">{"Scrub your EXIF metadata."}</p>
	</header>);
}
