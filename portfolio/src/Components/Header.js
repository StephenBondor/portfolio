import React from 'react';

//-- Components --//

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';
import mediaQueryFor from '../styles/MediaQueries';
import {TerminalFont} from '../styles/Font';

//-- Assets --//

const StyledHeader = styled.header`
	width: 100vw;
	min-height: 100vh;

	padding: 0 40px;

	background: ${colors.foreground}

	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: left;

	font-family: ${TerminalFont};
	color: ${colors.textOnFG};
	line-height: 1.8rem;


	/* border: 1px solid blue; */
`;

const Warning = styled.span`
	color: ${colors.warning};
`;

const Alert = styled.span`
	color: ${colors.alert};
`;

const P = styled.div`
	display: inline;
	white-space: pre-wrap;
`;

const B = styled.span`
	font-weight: bold;
`;

// Animation source files: https://css-tricks.com/snippets/css/typewriter-effect/
// Doing all this animation was impossible without: https://css-tricks.com/almanac/properties/a/animation/
const Typing = styled.div`
	overflow: hidden;
	width: 17ch;
	border-right: 1ch solid orange;
	white-space: nowrap;
	animation: typing 1.5s steps(16, end),
		blink-caret 1s 2.5s step-end forwards 1;

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 17ch;
		}
	}
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: orange;
		}
	}
`;

const Booting = styled.div`
	overflow: hidden;
	height: 0px;
	animation: booting 0.75s steps(37, end) 4s forwards;

	@keyframes booting {
		from {
			height: 0px;
		}
		to {
			height: 100%;
		}
	}
`;

const StillBootingBoarder = styled.div`
	width: 20ch;
	animation: stillbootingboarder 0.1s 4s forwards;
	border-bottom: 1px solid ${colors.foreground};

	@keyframes stillbootingboarder {
		from {
			border-bottom: ${colors.foreground};
		}
		to {
			border-bottom: 1px solid orange;
		}
	}
`;

const StillBooting = styled.div`
	overflow: hidden;
	color: orange;
	width: 0px;
	animation: stillbooting 5s steps(20, end) 4s forwards;

	@keyframes stillbooting {
		from {
			width: 0px;
		}
		to {
			width: 20ch;
		}
	}
`;

const Booted = styled.div`
	overflow: hidden;
	height: 0px;
	animation: booted 0.75s steps(2, end) 10s forwards;

	@keyframes booted {
		from {
			height: 0px;
		}
		to {
			height: 100%;
		}
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<P>
				<Typing>$init-new-dev -y </Typing>
				<Booting lines={37}>
					<B>make developer v1.13.0</B> <br />
					<Warning>
						warning: dangerously effective developer!{' '}
					</Warning>
					<Alert>
						The yes flag has been set. Default paramaters will be
						pre-loaded, including training on leanring how to learn,
						to automatically answer “I can do that, and if I can’t,
						I can learn it".
					</Alert>{' '}
					<br />
					<Alert>question</Alert> name (stephen bondor): <br />
					<Alert>question</Alert> available when (now): <br />
					<Alert>question</Alert> stack (full-stack): <br />
					<Alert>question</Alert> emphasis (refactoring,
					communicative, team-player): <br />
					<Alert>question</Alert> technologies (<br />
					{'	'}HTML, <br />
					{'	'}CSS, <br />
					{'	'}Animation, <br />
					{'	'}JavaScript, <br />
					{'	'}React, <br />
					{'	'}Styled-Components, <br />
					{'	'}MUI, <br />
					{'	'}Responsive Design, <br />
					{'	'}UI/UX, <br />
					{'	'}Redux, <br />
					{'	'}Node, <br />
					{'	'}GraphQL, <br />
					{'	'}Apollo, <br />
					{'	'}Prisma, <br />
					{'	'}Gatsby, <br />
					{'	'}RDBMS, <br />
					{'	'}SQL, <br />
					{'	'}JWT, <br />
					{'	'}RESTful API, <br />
					{'	'}Python, <br />
					{'	'}Github): <br /> <br />
					<Warning>compiling…</Warning> <br /> <br />
				</Booting>
				<StillBootingBoarder>
					<StillBooting>████████████████████</StillBooting>
				</StillBootingBoarder>
				<br />
				<br />
				<Booted>
					<Warning>
						<B>Human Developer Compiled Successfully!</B>
					</Warning>
					<br /> <br /> <br />
					<Alert>if only finding a developer was this easy...</Alert>
					<br /> <br />
				</Booted>
			</P>
		</StyledHeader>
	);
};

export default Header;
