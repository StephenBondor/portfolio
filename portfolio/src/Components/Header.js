import React, {useState, useRef, useLayoutEffect} from 'react';

//-- Components --//

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';
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

	position: static;
	bottom: 0;

	font-family: ${TerminalFont};
	color: ${colors.textOnFG};
	line-height: 1.8rem;
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

const B = styled.div`
	font-weight: bold;
`;

// Animation source files: https://css-tricks.com/snippets/css/typewriter-effect/
// Doing all this animation was impossible without: https://css-tricks.com/almanac/properties/a/animation/
const Typing = styled.div`
	width: 18ch;
	overflow: hidden;
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
	border-bottom: 1px solid ${colors.foreground};

	animation: stillbootingboarder 0.1s 4s forwards;
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
	width: 0px;
	overflow: hidden;
	color: ${colors.active};

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
	height: 0px;
	overflow: hidden;

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
	height: 3rem;
	margin: 0 auto;
	opacity: 0;

	transition: all 0.3s ease-in-out;

	svg {
		width: 26px;
		height: 26px;
		fill: ${colors.textOnFG};
	}

	&:hover {
		transform: scale(1.25);
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
	const animationEndRef = useRef(null);
	const [updated, setUpdated] = useState(false);

	const scrollToBottom = () => {
		animationEndRef.current.scrollIntoView({
			// behavior: 'smooth',
			block: 'end'
		});
	};

	useLayoutEffect(() => {
		if (!updated) {
			let counter = 0;
			let i = setInterval(() => {
				scrollToBottom();
				if (++counter > 11) clearInterval(i);
			}, 1000);
			setUpdated(true);
		}
	}, [updated]);

	return (
		<StyledHeader>
			<P>
				<Typing>~$init-new-dev -y </Typing>
				<Booting>
					<B>make developer v1.13.0</B>
					<Warning>
						warning: dangerously effective developer!{' '}
					</Warning>
					<Alert>
						The yes flag has been set. Default paramaters will be
						pre-loaded, including training on learning how to learn,
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
					{'  '}Git, <br />
					{'  '}JavaScript, <br />
					{'  '}Python, <br />
					{'  '}C, <br />
					{'  '}UI/UX, <br />
					{'  '}React, <br />
					{'  '}Responsive Design, <br />
					{'  '}CSS, <br />
					{'  '}Styled-Components, <br />
					{'  '}MUI, <br />
					{'  '}Animation, <br />
					{'  '}HTML, <br />
					{'  '}Redux, <br />
					{'  '}Node, <br />
					{'  '}GraphQL, <br />
					{'  '}Apollo, <br />
					{'  '}Prisma, <br />
					{'  '}Gatsby, <br />
					{'  '}RDBMS, <br />
					{'  '}SQL, <br />
					{'  '}JWT, <br />
					{'  '}RESTful API): <br /> <br />
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
				onClick={() =>
					animationEndRef.current.scrollIntoView({
						behavior: 'smooth'
					})
				}>
				<svg ref={animationEndRef}>
					<path d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' />
				</svg>
			</Pointer>
		</StyledHeader>
	);
};

export default Header;
