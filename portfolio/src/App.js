import React, {useState, useEffect} from 'react';
import Plx from 'react-plx';

//-- Components --//
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';

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
`;

const textData = [
	{
		start: 'self',
		duration: '30vh',
		easing: 'easeInOutSine',
		properties: [
			{
				startValue: 90,
				endValue: 25,
				unit: 'vh',
				property: 'translateY'
			}
		]
	},
	{
		start: 'self',
		startOffset: '40vh',
		duration: '30vh',
		easing: 'easeInOutSine',
		properties: [
			{
				startValue: 25,
				endValue: 0,
				unit: 'vh',
				property: 'translateY'
			}
		]
	}
];

const portfolioData = [
	{
		start: 'self',
		duration: '15vh',
		easing: 'easeInOutSine',
		properties: [
			{
				startValue: 50,
				endValue: 25,
				unit: 'vh',
				property: 'translateY'
			}
		]
	},
	{
		start: 'self',
		startOffset: '0vh',
		duration: '15vh',
		easing: 'easeInOutSine',
		properties: [
			{
				startValue: 25,
				endValue: 0,
				unit: 'vh',
				property: 'translateY'
			}
		]
	}
];

const Sidewaze = styled.div`
	position: absolute;
	transform: rotate(-90deg);
	white-space: nowrap;
	font-size: 8rem;
	right: 4vw;
	font-weight: bold;
`;

const movingName = [
	{
		start: '15%',
		startOffset: '0vh',
		end: 'self',
		endOffset: '50vh',
		easing: 'easeInOutSine',
		properties: [
			{
				startValue: 125,
				endValue: 75,
				property: 'translateY',
				unit: 'vh'
			}
		]
	},
	{
		start: 'self',
		startOffset: '50vh',
		end: 'self',
		endOffset: '150vh',
		easing: 'easeInOutSine',
		properties: [
			{
				startValue: 75,
				endValue: 25,
				property: 'translateY',
				unit: 'vh'
			}
		]
	}
];

const App = () => {
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		setTimeout(() => setDisplay(true), 11000);
	});

	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<Header />
				{display && (
					<>
						<Plx
							parallaxData={textData}
							animateWhenNotInViewport={true}>
							<Body />
						</Plx>
						<Plx
							style={{'z-index': '10'}}
							parallaxData={movingName}
							animateWhenNotInViewport={true}>
							<Sidewaze> Stephen Bondor </Sidewaze>
						</Plx>
						<Plx
							parallaxData={portfolioData}
							animateWhenNotInViewport={true}>
							<Portfolio />
						</Plx>
						<Footer />
					</>
				)}
			</AppContainer>
		</>
	);
};

export default App;
