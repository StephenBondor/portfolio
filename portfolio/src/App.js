import React, {useState, useEffect, useLayoutEffect} from 'react';

//-- Components --//
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';

//-- Styles --//
import styled from 'styled-components';
import {GlobalStyle} from './styles/GlobalStyles';

//-- Globals --//
const {addEventListener, removeEventListener} = window;

const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	margin: 0px auto;
	width: 100%;
`;

// These functions, getY and useY, are used to change state of Y according to the scrollY offset when it changes.
// They are needed to perform Parallax is JS. Admittedly, it's probably smoother to do it natively in
// CSS. However, the elements that the Parallax applies to will introduce some serious confusion
// in the logic and future maintainability. Additionally,they remove the need to rely on modules
// that are almost all not maintained.
const getY = () => window.scrollY;
const useY = () => {
	const [y, setY] = useState(getY());
	useLayoutEffect(() => {
		addEventListener('scroll', () => setY(getY()));
		return () => removeEventListener('scroll', () => setY(getY()));
	}, []);
	return y;
};

const App = () => {
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
			<Portfolio y={useY} playedBefore={playedBefore} />
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
