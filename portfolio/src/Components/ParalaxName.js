import React, {useRef, useLayoutEffect} from 'react';

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

const {addEventListener, removeEventListener} = window;

const ParallaxName = () => {
	const componentRef = useRef({});

	const setY = () => {
		const {innerHeight, scrollY} = window;
		const {style, offsetTop} = componentRef.current;
		const [speed, midPoint] = [-1, 0.25]; // (-) for opposite direction as scroll, .25 centers midPoint
		const y = speed * (scrollY - offsetTop + midPoint * innerHeight);
		style.setProperty('transform', `translateY(${y}px)`);
	};

	useLayoutEffect(() => {
		addEventListener('scroll', () => setY());
		return () => removeEventListener('scroll', () => setY());
	});

	return (
		<StyledPlx ref={componentRef}>
			<Sideways>Stephen Bondor</Sideways>
		</StyledPlx>
	);
};

export default ParallaxName;

// This function setY, is used to change transformY offest according
// to the scrollY offset when it changes. It is needed to perform
// Parallax is JS. Admittedly, it's probably smoother to do it natively in
// CSS. However, the elements that the Parallax applies to will introduce
// some serious confusion in the logic and future maintainability if done
// in native CSS. Additionally, this removes the need to rely on libraries
// that were built to solve this problem in react, but having solved it,
// are almost not at all maintained, buggy as heck, and have caused someone
// else to build another library... which, having solved the problem, has
// again fallen into disrepair. A vicious cycle. This way is as clean and
// easy as it gets, that I have found
