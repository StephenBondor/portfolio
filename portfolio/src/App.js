import React, {useState, useEffect} from 'react';

//-- Components --//
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
// Should add an About section

//-- Styles --//
import styled from 'styled-components';
import {GlobalStyle} from './styles/GlobalStyles';

//-- Globals --//

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

	const dropIt = () => localStorage.removeItem('alreadyPlayed');

	const EntireSite = (
		<>
			<Body playedBefore={playedBefore} dropIt={dropIt} />
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
