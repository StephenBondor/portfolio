import React from 'react';

//-- Components --//
import Plx from 'react-plx';

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';
// import mediaQueryFor from '../styles/MediaQueries';

//-- Assets --//

const StyledBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

const StyledIntro = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 4rem;
	line-height: 6.5rem;
	width: 61.8%;
	max-width: 700px;
	white-space: nowrap;
`;

const Normal1 = styled.div`
	/* align-self: flex-start; */
`;

const Bold = styled.div`
	font-weight: bold;
	margin-left: 20%;
`;

const Normal2 = styled.div`
	align-self: flex-end;
	/* add a media query here to change to center when width gets wider than frame */
`;

const Medium = styled.div`
	margin-top: 6.5rem;
	margin-left: 20%;
	font-size: 3rem;
`;

const Small = styled.div`
	font-size: 1.7rem;
	margin-left: 45%;
`;

const Pointer = styled.div`
	margin: 0 auto;
	height: 3rem;
	width: 26px;
	transition: all 0.3s ease-in-out;
	svg {
		width: 26px;
		height: 26px;
		fill: ${colors.text};
	}
	&:hover {
		transform: scale(1.25);
		cursor: pointer;
	}
`;

const textData = [
	{
		start: 'self',
		duration: '25vh',
		easing: 'easeInOutSine',
		properties: [
			{
				startValue: 100,
				endValue: 50,
				unit: 'vh',
				property: 'translateY'
			}
		]
	},
	{
		start: 'self',
		startOffset: '10vh',
		duration: '25vh',
		easing: 'easeInOutSine',
		properties: [
			{
				startValue: 50,
				endValue: 0,
				unit: 'vh',
				property: 'translateY'
			}
		]
	}
];

const Body = () => {
	return (
		<StyledBody>
			{/* empty div to target the Flex box correctly */}
			<div />
			<StyledIntro>
				<Normal1>
					<Plx
						parallaxData={textData}
						animateWhenNotInViewport={true}>
						Oh Hai!
					</Plx>
				</Normal1>
				<Bold>
					<Plx
						parallaxData={textData}
						animateWhenNotInViewport={true}>
						I'm Bondor
					</Plx>
				</Bold>
				<Normal2>
					<Plx
						parallaxData={textData}
						animateWhenNotInViewport={true}>
						a full-stack developer
					</Plx>
				</Normal2>
				<Medium>
					<Plx
						parallaxData={textData}
						animateWhenNotInViewport={true}>
						Nice to meet you!
					</Plx>
				</Medium>
				<Small>
					<Plx
						parallaxData={textData}
						animateWhenNotInViewport={true}>
						(Awesome name, right?)
					</Plx>
				</Small>
			</StyledIntro>
			<Pointer
				onClick={() =>
					window.scrollTo({
						top: window.innerHeight * 2 - 30,
						left: 0,
						behavior: 'smooth'
					})
				}>
				<svg>
					<path d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' />
				</svg>
			</Pointer>
		</StyledBody>
	);
};

export default Body;
