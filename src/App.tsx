import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { FileUploader } from './components/FileUploader';
import { Footer } from './components/Footer';
import './components/sass/App.scss';

const App = () => {
	return (<div className="app">
	<div className="app-wrapper">
		<Header/>
		<FileUploader/>
	</div>
	<Footer/></div>);
}

ReactDOM.render(<App/>, document.getElementById('root'));
