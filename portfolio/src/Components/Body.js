import React from 'react';

//-- Components --//

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';
import mediaQueryFor from '../styles/MediaQueries';

//-- Assets --//

const StyledBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100vw;
	border: 1px solid blue;
`;

const styledIntro = styled.div`
	padding: 200px;
	font-size: 4rem;
	line-height: 6.5rem;
	display: inline;
	white-space: pre-wrap;
	border: 1px solid red;
`;

const Small = styled.span`
	font-size: 2rem;
`;

const Body = () => {
	return (
		<StyledBody thing={9}>
			hello
			<styledIntro>
				Hi, <br />
				{'	'}I'm Bondor, <br />
				{'		'}a full-stack developer <br /> <br /> <br />
				Nice to meet you! <br />
				{'			'}
				<Small>(Awesome name, right?)</Small>
				<br />
				BULUE
			</styledIntro>
			BLUE
		</StyledBody>
	);
};

export default Body;
