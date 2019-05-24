import React from 'react';

//-- Components --//

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';
import mediaQueryFor from '../styles/MediaQueries';

//-- Assets --//

const StyledFooter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: ${(1 - 0.618) * 100}vh;

	background: ${colors.foreground};
	border: 1px solid green;
`;

const Footer = () => {
	return <StyledFooter>Hello from Body</StyledFooter>;
};

export default Footer;
