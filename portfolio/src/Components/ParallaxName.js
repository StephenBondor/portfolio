import React, {useRef} from 'react';

//-- Components --//
import Parallax from './Parallax';

//-- Styles --//
import styled from 'styled-components';
// import {colors} from '../styles/Colors';

const StyledPlx = styled.div`
	/* border: 1px solid red; */
	display: flex;
	align-items: center;
	justify-content: left;
	transition: all ease;
	width: 10%;
	min-width: 100px;
	height: 50vh;
	max-height: 900px;
	@media (max-width: 500px) {
		display: none;
	}
`;

const Sideways = styled.div`
	/* border: 1px solid blue; */
	transform: rotate(-90deg) translateY(-260px);
	white-space: nowrap;
	font-size: 8rem;
	font-weight: bold;
	line-height: 100px;
	@media (max-width: 500px) {
		display: none;
	}
`;

// test

const ParallaxName = () => {
	const componentRef = useRef({});
	Parallax(componentRef, -1, 0.25 * window.innerHeight);
	return (
		<StyledPlx ref={componentRef}>
			<Sideways>Stephen Bondor</Sideways>
		</StyledPlx>
	);
};

export default ParallaxName;
