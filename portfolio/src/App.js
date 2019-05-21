import React from 'react';
import logo from './logo.svg';
import aweshit from './aw-shit-here-we-go-again-template.png';

import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<img src={aweshit} alt='awe shit' className='Awe-shit' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
