import React, {useRef} from 'react';

//-- Assets --//
import BigSir from '../IMG_4105.JPG';

//--Components--//
import Parallax from './Parallax';

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';

const StyledAbout = styled.div`
	height: 100vh;
	width: 100vw;
	min-height: 800px;
	clip-path: inset(0px 0px 0px 0px);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	color: ${colors.textOnFG};
	@media (max-width: 460px) {
		min-height: 1100px;
	}
`;

const StyledImg = styled.div`
	background-image: url(${BigSir});
	clip-path: inset(0px 0px 0px 0px);
	overflow: hidden;
	height: 140%;
	width: 100%;
	background-position: center;
	background-size: cover;
	position: absolute;
	z-index: -10;
	@media (max-width: 460px) {
		height: 180%;
	}
`;

const StyledTextBox = styled.div`
	background: ${colors.activeOpaque};
	padding: 50px;
	border-left: 10px solid ${colors.active};

	@media (max-width: 460px) {
		padding: 30px;
		width: 90%;
	}
`;

const StyledTitle = styled.div`
	z-index: 0;
	color: ${colors.textOnFG};
	font-size: 4rem;
	font-weight: bold;
	text-align: center;

	margin-bottom: 20px;
`;

const StyledBody = styled.div`
	font-size: 2.6rem;
	max-width: ${window.innerWidth * 0.6}px;
	line-height: 3.3rem;

	@media (max-width: 460px) {
		font-size: 2.2rem;
		max-width: none;
	}
`;

const About = ({playedBefore}) => {
	const componentRef = useRef({});
	const {innerHeight} = window;
	Parallax(
		componentRef,
		0.7,
		playedBefore ? 1 : innerHeight * (innerHeight < 600 ? 2.6 : 1.43),
		true
	);
	console.log('rendered');
	return (
		<StyledAbout>
			<StyledImg ref={componentRef} />
			<StyledTextBox>
				<StyledTitle>Who?</StyledTitle>
				<StyledBody>
					<br /> An unyielding advocate for communication,
					collaboration, and sussing-out differences tactfully on
					teams to avoid death-by-meeting. I am passionate about
					talking face-to-face to reach consensus quickly. In fact,
					it's what I spent a half-decade doing on set in
					entertainment, under some of the most gurling conditions on
					earth, with some of the worlds biggest (and outlandish)
					personalities.
					<br />
					<br />
					Now, I am taking that experience to development
				</StyledBody>
			</StyledTextBox>
		</StyledAbout>
	);
};

export default About;
