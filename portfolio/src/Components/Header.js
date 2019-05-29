import React, {useState, useEffect, useRef} from 'react';

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
	background: ${colors.foreground};
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: left;
	font-family: ${TerminalFont};
	color: ${colors.textOnFG};
	line-height: 1.8rem;
	position: ${props => props.position};
	bottom: 0;
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
	width: 18ch;
	border-right: 1ch solid ${colors.active};
	white-space: nowrap;
	animation: typing 1.5s steps(16, end),
		blink-caret 1s 2.5s step-end forwards 1;

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 18ch;
		}
	}
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: ${colors.active};
		}
	}
`;

const Booting = styled.div`
	overflow: hidden;
	height: 0;
	animation: booting 0.25s steps(37, end) 4s forwards;

	@keyframes booting {
		from {
			height: 0;
		}
		to {
			height: auto;
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
			border-bottom: 1px solid ${colors.active};
		}
	}
`;

const StillBooting = styled.div`
	overflow: hidden;
	color: ${colors.active};
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

const Pointer = styled.div`
	margin: 0 auto;
	height: 3rem;
	opacity: 0;
	width: 26px;
	svg {
		fill: ${colors.textOnFG};
	}
	&:hover {
		cursor: pointer;
	}

	animation: arrowbooted 0.75s 11s forwards;

	@keyframes arrowbooted {
		from {
			opacity: 0;
		}
		to {
			opacity: 100;
		}
	}
`;

const Header = () => {
	const [position, setPosition] = useState('fixed');
	const [updated, setUpdated] = useState(false);
	const animationEndRef = useRef(null);

	const scrollToBottom = () => {
		animationEndRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'end'
		});
	};

	useEffect(() => {
		if (!updated) {
			setTimeout(() => {
				scrollToBottom();
				setPosition('static');
				scrollToBottom();
			}, 10000);
			setUpdated(true);
		}
	});

	return (
		<StyledHeader position={position}>
			<P>
				<Typing>~$init-new-dev -y </Typing>
				<Booting>
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
					<Warning>question</Warning> name (stephen bondor): <br />
					<Warning>question</Warning> available when (now): <br />
					<Warning>question</Warning> stack (full-stack): <br />
					<Warning>question</Warning> skills (communication,
					leadership, team-work, planning, coordination,
					hecking-cool): <br />
					<Warning>question</Warning> technologies (<br />
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
					{'	'}Git): <br /> <br />
					<Warning>compiling…</Warning> <br /> <br />
				</Booting>
				<StillBootingBoarder>
					<StillBooting>████████████████████</StillBooting>
				</StillBootingBoarder>
				<br />
				<br />
				<Booted>
					<B>Human Developer Compiled Successfully!</B>
					<br /> <br /> <br />
					<Alert>if only finding a developer was this easy...</Alert>
					<br /> <br /> <br /> <br />
				</Booted>
			</P>
			<Pointer
				ref={animationEndRef}
				onClick={() =>
					window.scrollTo({
						top: window.innerHeight,
						left: 0,
						behavior: 'smooth'
					})
				}>
				<svg>
					<path d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' />
				</svg>
			</Pointer>
		</StyledHeader>
	);
};

export default Header;
