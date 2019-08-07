import React, {useRef} from 'react';

//-- Components --//

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';

//-- Globals --//
// const {addEventListener, removeEventListener} = window;

//-- Assets --//

const StyledBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	height: 100vh;
	min-height: 650px;
	width: 100vw;
	min-width: 320px;

	/* border: 1px solid red; */
	opacity: 0;

	animation: boot 1.25s forwards;
	@keyframes boot {
		from {
			opacity: 0;
			transform: scale(0.85);
		}
		to {
			opacity: 100;
			transform: scale(1);
		}
	}
	clip-path: inset(0px 0px 0px 0px);
`;

const StyledIntro = styled.div`
	display: flex;
	flex-direction: column;

	width: 61.8%;
	max-width: 700px;

	font-size: 4rem;
	line-height: 6.5rem;
	white-space: nowrap;

	@media (max-width: 460px) {
		margin-top: 70px;
	}
`;

const Normal1 = styled.div`
	/* align-self: flex-start; */
`;

const Bold = styled.div`
	font-weight: bold;
	margin-left: 20%;

	@media (max-width: 460px) {
		margin-left: 0%;
	}
`;

const Normal2 = styled.div`
	align-self: flex-end;

	@media (max-width: 460px) {
		white-space: pre-line;
	}
	@media (max-width: 600px) {
		align-self: center;
	}
`;

const Medium = styled.div`
	margin-top: 6.5rem;
	margin-left: 20%;

	font-size: 3rem;

	@media (max-width: 460px) {
		margin-left: 0%;
		white-space: pre-line;
	}
`;

const Small = styled.div`
	margin-left: 45%;

	font-size: 1.7rem;

	@media (max-width: 460px) {
		margin-bottom: 60px;
	}

	@media (max-width: 460px) {
		margin-left: 0%;
	}
`;

const Pointer = styled.div`
	height: 3rem;
	width: 26px;

	margin: 0 auto;

	svg {
		width: 26px;
		height: 26px;
		fill: ${colors.text};

		transition: all 0.3s ease-in-out;
		&:hover {
			transform: scale(1.25);
			cursor: pointer;
		}
	}

	transition: all 0.3s ease-in-out;
	transform: translate(0, 200px);
	animation: glideUp 0.75s ease-out 0.75s forwards;

	@keyframes glideUp {
		from {
			transform: translate(0, 200px);
		}
		to {
			transform: translate(0, 0px);
		}
	}
`;

const WatchAgain = styled.span`
	margin: 10px;

	transform: translate(0, -200px);
	animation: dropDown 0.75s ease-out 0.75s forwards;

	@keyframes dropDown {
		from {
			transform: translate(0, -200px);
		}
		to {
			transform: translate(0, 0px);
		}
	}
`;

const Body = props => {
	const arrow2Ref = useRef(null);
	// console.log('rendered body');
	return (
		<StyledBody>
			{props.playedBefore ? (
				<WatchAgain
					onClick={() => {
						props.dropIt();
					}}>
					<a
						href={`${process.env.REACT_APP_API_URL}`}
						alt='Watch the intro again!'>
						But, that sweet intro?
					</a>
				</WatchAgain>
			) : (
				<div>{/* empty div to target flex box correctly*/}</div>
			)}
			<StyledIntro>
				<Normal1>Oh Hai!</Normal1>
				<Bold>I'm Bondor</Bold>
				<Normal2>a full-stack developer</Normal2>
				<Medium>Nice to meet you!</Medium>
				<Small>(Awesome name, right?)</Small>
			</StyledIntro>
			<Pointer
				onClick={() =>
					arrow2Ref.current.scrollIntoView({
						behavior: 'smooth'
					})
				}>
				<svg ref={arrow2Ref}>
					<path d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' />
				</svg>
			</Pointer>
		</StyledBody>
	);
};

export default Body;
