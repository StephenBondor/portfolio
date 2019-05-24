import React from 'react';

//-- Components --//
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

//-- Styles --//
import styled from 'styled-components';
import {GlobalStyle} from './styles/GlobalStyles';

const AppContainer = styled.div`
	margin: 0px auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 100%;
	/* border: 1px solid red; */
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<Header />
				<Body />
				<Footer />
			</AppContainer>
		</>
	);
};

export default App;
