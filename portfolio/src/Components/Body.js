import React from 'react';

//-- Components --//

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
	padding-right: 40px;
`;

const StyledIntro = styled.div`
	font-size: 4rem;
	line-height: 6.5rem;
	display: inline;
	white-space: pre-wrap;
`;

const Bold = styled.span`
	font-weight: bold;
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

const Medium = styled.span`
	font-size: 3rem;
`;

const Small = styled.span`
	font-size: 1.7rem;
`;

const Body = () => {
	return (
		<StyledBody>
			{/* empty div to target the Flex box correctly */}
			<div />
			<StyledIntro>
				Oh Hai! <br />
				{'	'}
				<Bold>I'm Bondor </Bold>
				<br />
				{'		'}a full-stack developer <br /> <br />
				<Medium>
					{'	'}Nice to meet you! <br />
				</Medium>
				{'			'}
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
