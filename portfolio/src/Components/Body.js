import React, {useRef} from 'react';

//-- Components --//
// import Parallax from './Parallax';
import Greating from './Greating';

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';

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
	opacity: 0;

	/* border: 1px solid red; */

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

const Pointer = styled.div`
	height: 3rem;
	width: 26px;

	margin: 0 auto;

	/* border: 1px solid red; */

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
	padding-top: 10px;

	transform: translate(0, -200px);
	animation: dropDown 0.75s ease-out 0.75s forwards;

	/* border: 1px solid red; */

	@keyframes dropDown {
		from {
			transform: translate(0, -200px);
		}
		to {
			transform: translate(0, 0px);
		}
	}
`;

const Body = ({playedBefore, dropIt}) => {
	const arrow2Ref = useRef(null);
	return (
		<StyledBody>
			{playedBefore ? (
				<WatchAgain
					onClick={() => {
						dropIt();
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
			<Greating playedBefore={playedBefore} />
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
