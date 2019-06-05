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

const Bold = styled.span`
	font-weight: bold;
	margin-left: 20%;
`;

const Normal2 = styled.div`
	align-self: flex-end;
	/* add a media query here to change to center when width gets wider than frame */
`;

const Medium = styled.span`
	margin-top: 6.5rem;
	margin-left: 20%;
	font-size: 3rem;
`;

const Small = styled.span`
	font-size: 1.7rem;
	margin-left: 45%;
`;

const Pointer = styled.div`
	margin: 0 auto;
	height: 3rem;
	width: 26px;
	svg {
		fill: ${colors.text};
	}
	&:hover {
		cursor: pointer;
	}
`;

const Body = () => {
	return (
		<StyledBody>
			{/* empty div to target the Flex box correctly */}
			<div />
			<StyledIntro>
				<Normal1>Oh Hai!</Normal1>
				<Bold>I'm Bondor </Bold>
				<Normal2>a full-stack developer</Normal2>
				<Medium>Nice to meet you!</Medium>
				<Small>(Awesome name, right?)</Small>
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
