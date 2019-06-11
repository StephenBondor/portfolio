import React from 'react';

//-- Components --//

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';

//-- Assets --//
import Headshot from '../headshot.png';

const StyledFooter = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;

	width: 100vw;
	height: ${(1 - 0.618) * 100}vh;
	min-height: 350px;
	max-height: 450px;

	background: linear-gradient(${colors.foreground}, ${colors.alert});
`;

const StyledFooterContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;

	margin-top: 30px;

	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

const StyledPicContainer = styled.img`
	width: 200px;
	height: 200px;
	margin: 40px;

	border: 10px solid ${colors.active};
	border-radius: 50%;

	@media (max-width: 500px) {
		position: absolute;
		top: -155px;

		margin: 0 auto;
	}

	transition: all 0.3s ease-in-out;
	&:hover {
		transform: scale(1.02);
	}
`;

const StyledContact = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	margin-right: 40px;

	color: ${colors.textOnFG};
	font-size: 2.6rem;
	min-height: 200px;

	@media (max-width: 500px) {
		margin-left: 40px;
		align-items: center;
	}
`;

const StyledName = styled.div`
	@media (max-width: 500px) {
		margin-top: 40px;
		text-align: center;
	}
`;

const StyledLocation = styled.div`
	font-size: 1.6rem;
`;

const StyledLinks = styled.div`
	font-size: 2rem;
`;

const StyledLink = styled.a`
	&:link {
		color: ${colors.textOnFG};
	}
	&:visited {
		color: ${colors.inactive};
	}
	&:hover {
		color: ${colors.hoverColor};
	}
`;

const Copyright = styled.div`
	margin-bottom: 20px;

	color: ${colors.warning};
	font-size: 1.6rem;
	text-align: center;

	@media (max-width: 500px) {
		max-width: 250px;
	}
`;

const Intro = styled.span`
	text-decoration: underline;
	a {
		&:link {
			color: ${colors.warning};
		}
		&:visited {
			color: ${colors.hoverColor};
		}
		&:hover {
			color: ${colors.hoverColor};
		}
	}
`;

const Footer = () => {
	const dropIt = () => {
		localStorage.removeItem('alreadyPlayed');
	};

	return (
		<StyledFooter>
			<div>{/* #empty div for correct flexbox targeting*/}</div>
			<StyledFooterContent>
				<StyledPicContainer src={Headshot} alt='headshot' />
				<StyledContact>
					<StyledName>Stephen Bondor, Developer</StyledName>
					<StyledLocation>Los Angeles</StyledLocation>
					<StyledLinks>
						<StyledLink
							href='https://stephenbondor.netlify.com/'
							target='_blank'
							rel='noopener noreferrer'>
							Blog
						</StyledLink>{' '}
						|{' '}
						<StyledLink
							href='https://www.linkedin.com/in/stephenbondor/'
							target='_blank'
							rel='noopener noreferrer'>
							LinkedIn
						</StyledLink>{' '}
						|{' '}
						<StyledLink
							href='https://github.com/StephenBondor'
							target='_blank'
							rel='noopener noreferrer'>
							GitHub
						</StyledLink>{' '}
					</StyledLinks>
				</StyledContact>
			</StyledFooterContent>
			<Copyright>
				{' '}
				© Copyright Stephen Bondor 2019 •{' '}
				<Intro
					onClick={() => {
						dropIt();
					}}>
					<a
						href={`${process.env.REACT_APP_API_URL}`}
						alt='Watch the intro again!'>
						I'm here for that sweet intro
					</a>
				</Intro>
			</Copyright>
		</StyledFooter>
	);
};

export default Footer;
