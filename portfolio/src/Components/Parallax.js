import {useLayoutEffect} from 'react';

const {addEventListener, removeEventListener} = window;

const Parallax = (componentRef, speed, offsetAdjustment, top) => {
	[speed, offsetAdjustment, top] = [
		speed || -1,
		offsetAdjustment || 0,
		top || false
	];
	// speed: (-) for opposite direction as scroll, between 0 and 1 for far way
	// midPoint: .25 vertically centers midPoint

	const setY = () => {
		const {scrollY} = window;
		const {style, offsetTop} = componentRef.current;

		const y = speed * (scrollY - offsetTop + offsetAdjustment);

		// console.log(scrollY, offsetTop, offsetAdjustment, y);
		if (!top)
			// style.setProperty('transform', `translateY(${Math.round(y)}px)`);
			style.transform = `translateY(${Math.round(y)}px)`;
		else
			style.setProperty('top', `${Math.round(y + window.innerHeight)}px`);
	};

	useLayoutEffect(() => {
		addEventListener('scroll', () => setY());
		return () => removeEventListener('scroll', () => setY());
	});
};

export default Parallax;

// This function is used to change transformY offest according
// to the scrollY offset when it changes. It is needed to perform
// Parallax is JS. Admittedly, it's probably smoother to do it natively in
// CSS. However, the elements that the Parallax applies to will introduce
// some serious confusion in the logic and future maintainability if done
// in native CSS. Additionally, this removes the need to rely on libraries
// that were built to solve this problem in react, but having solved it,
// are almost not at all maintained, buggy as heck, and have caused someone
// else to build another library... which, having solved the problem, has
// again fallen into disrepair. A vicious cycle. This way is as clean and
// easy as it gets, that I have found.
// It also helps with the fact that ref get rect went passed around through HOCs
