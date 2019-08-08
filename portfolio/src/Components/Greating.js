import React, {useRef, useState, useEffect} from 'react';

//-- Components --//
import Parallax from './Parallax';

//-- Styles --//
import styled from 'styled-components';

const StyledIntro = styled.div`
	display: flex;
	flex-direction: column;
	width: 61.8%;
	max-width: 700px;
	transition: all;
	font-size: 4rem;
	line-height: 6.5rem;
	white-space: nowrap;

	@media (max-width: 460px) {
		margin-top: ${props => (props.playedBefore ? 70 : 170)}px;
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
const Greating = ({playedBefore}) => {
	const hiRef = useRef({});
	// setState is needed to force ref.current to populate after initial unpopulated render.
	const [, setState] = useState(false);
	useEffect(() => setState(true), []);

	Parallax(hiRef, -0.5, (playedBefore ? 1 : 0.25) * hiRef.current.offsetTop);
	return (
		<StyledIntro playedBefore={playedBefore} ref={hiRef}>
			<Normal1>Oh Hai!</Normal1>
			<Bold>I'm Bondor</Bold>
			<Normal2>a full-stack developer</Normal2>
			<Medium>Nice to meet you!</Medium>
			<Small>(Awesome name, right?)</Small>
		</StyledIntro>
	);
};

export default Greating;
