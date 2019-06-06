import React from 'react';

//-- Components --//

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';
// import mediaQueryFor from '../styles/MediaQueries';

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
	background: linear-gradient(${colors.foreground}, ${colors.alert});
`;

const StyledFooterContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
`;

const StyledPicContainer = styled.img`
	border: 10px solid ${colors.active};
	border-radius: 50%;
	width: 200px;
	height: 200px;
	margin: 40px;

	transition: all 0.3s ease-in-out;
	&:hover {
		transform: scale(1.02);
	}
`;

const StyledContact = styled.div`
	color: ${colors.textOnFG};
	font-size: 2.6rem;
	margin-right: 40px;
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
	color: ${colors.warning};
	margin-bottom: 20px;
	font-size: 1.6rem;
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
