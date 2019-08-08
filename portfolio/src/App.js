import React, {useState, useEffect} from 'react';

//-- Components --//
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

//-- Styles --//
import styled from 'styled-components';
import {GlobalStyle} from './styles/GlobalStyles';

const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	margin: 0px auto;
	width: 100%;
`;

const App = () => {
	// State management to determine if we should play the intro
	const [display, setDisplay] = useState(false);
	const [stored, setStorage] = useState(false);
	const [playedBefore, setPlayed] = useState(false);
	useEffect(() => {
		setTimeout(() => setDisplay(true), 11000);
		if (!localStorage.getItem('alreadyPlayed')) {
			localStorage.setItem('alreadyPlayed', true);
			setStorage(true); // notify State we have set LS
		} else if (!stored) setPlayed(true); // we have played this before
	}, [stored, playedBefore]);

	// drop the localStorage to force an animation play
	const dropIt = () => localStorage.removeItem('alreadyPlayed');

	const EntireSite = (
		<>
			<Body playedBefore={playedBefore} dropIt={dropIt} />
			<About playedBefore={playedBefore} />
			<Portfolio playedBefore={playedBefore} />
			<Footer dropIt={dropIt} />
		</>
	);

	return (
		<>
			<GlobalStyle />
			<AppContainer>
				{!playedBefore ? (
					<>
						{stored && <Header />}
						{display && EntireSite}
					</>
				) : (
					EntireSite
				)}
			</AppContainer>
		</>
	);
};

export default App;
