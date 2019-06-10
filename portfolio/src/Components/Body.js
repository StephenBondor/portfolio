import React, {useRef} from 'react';

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
	min-height: 568px;
	width: 100vw;
	min-width: 320px;
	opacity: 0;

	animation: boot 1.25s forwards;
	@keyframes boot {
		from {
			opacity: 0;
			transform: scale(0.85);
		}
		to {
			opacity: 100;
			transform: scale(1);
		}
	}
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
	@media (max-width: 460px) {
		margin-left: 0%;
	}
`;

const Normal2 = styled.div`
	align-self: flex-end;

	@media (max-width: 460px) {
		white-space: pre-line;
	}
	@media (max-width: 600px) {
		align-self: center;
	}
`;

const Medium = styled.div`
	margin-top: 6.5rem;
	margin-left: 20%;
	font-size: 3rem;
	@media (max-width: 460px) {
		margin-left: 0%;
		white-space: pre-line;
	}
`;

const Small = styled.div`
	font-size: 1.7rem;
	margin-left: 45%;
	@media (max-width: 460px) {
		margin-left: 0%;
	}
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

// https://codesandbox.io/embed/v64l2l12y7?fontsize=14 <-- code sandbox on wtf these do
// docs: https://github.com/Stanko/react-plx
// let textData = [
// 	{
// 		start: 'self',
// 		duration: '25vh',
// 		easing: 'easeInOutSine',
// 		properties: [
// 			{
// 				startValue: 100,
// 				endValue: 50,
// 				unit: 'vh',
// 				property: 'translateY'
// 			}
// 		]
// 	},
// 	{
// 		start: 'self',
// 		startOffset: '10vh',
// 		duration: '25vh',
// 		easing: 'easeInOutSine',
// 		properties: [
// 			{
// 				startValue: 50,
// 				endValue: 0,
// 				unit: 'vh',
// 				property: 'translateY'
// 			}
// 		]
// 	}
// ];
let textData = [
	{
		start: 'self',
		startOffset: '0vh',
		end: 'self',
		endOffset: '25vh',
		easing: 'easeInOutSine',
		properties: [
			{
				startValue: 50,
				endValue: 0,
				unit: 'vh',
				property: 'translateY'
			}
		]
	},
	{
		start: 'self',
		startOffset: '75vh',
		end: 'self',
		endOffset: '100vh',
		easing: 'easeInOutSine',
		properties: [
			{
				startValue: 0,
				endValue: -50,
				unit: 'vh',
				property: 'translateY'
			}
		]
	}
];

const StyledPlx = styled(Plx).attrs(() => ({
	parallaxData: textData,
	animateWhenNotInViewport: true
}))``;

const Body = props => {
	const arrow2Ref = useRef(null);
	// if (props.playedBefore) textData = [];

	return (
		<StyledBody>
			{/* empty div to target the Flex box correctly */}
			<div />
			<StyledIntro>
				<Normal1>
					<StyledPlx>Oh Hai!</StyledPlx>
				</Normal1>
				<Bold>
					<StyledPlx>I'm Bondor</StyledPlx>
				</Bold>
				<Normal2>
					<StyledPlx>a full-stack developer</StyledPlx>
				</Normal2>
				<Medium>
					<StyledPlx>Nice to meet you!</StyledPlx>
				</Medium>
				<Small>
					<StyledPlx>(Awesome name, right?)</StyledPlx>
				</Small>
			</StyledIntro>
			<Pointer
				onClick={() =>
					arrow2Ref.current.scrollIntoView({
						behavior: 'smooth'
					})
				}>
				<svg ref={arrow2Ref}>
					<path d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' />
				</svg>
			</Pointer>
		</StyledBody>
	);
};

export default Body;
