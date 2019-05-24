import {css} from 'styled-components';

/*

 * Use of custom responsive query functions
 * These all assume Mobile First, change min-width to max-width for desktop first
 * import "mediaQueryFor" into your styles:

	import mediaQueryFor from './Styles/MediaQueries';

 * Use as follows, Example:

    const BtmContentStyles = styled.div`
        margin-top: 2%;
    
        ${mediaQueryFor.lgDevice`
           	margin-top: 4%
        `}
    `;

*/

const breakpoints = {
	xs: 288,
	sm: 568,
	md: 820,
	lg: 1100,
	xl: 1380,
	xxl: 1500
};

const xsDevice = (...args) => {
	return css`
		@media (min-width: ${breakpoints.xs}px) {
			/* min-width: ${breakpoints.xs}px; */
			${css(...args)}
		}
	`;
};

const smDevice = (...args) => {
	return css`
		@media (min-width: ${breakpoints.sm}px) {
			/* min-width: ${breakpoints.sm}px; */
			${css(...args)}
		}
	`;
};

const mdDevice = (...args) => {
	return css`
		@media (min-width: ${breakpoints.md}px) {
			/* min-width: ${breakpoints.md}px; */
			${css(...args)}
		}
	`;
};

const lgDevice = (...args) => {
	return css`
		@media (min-width: ${breakpoints.lg}px) {
			/* min-width: ${breakpoints.lg}px; */
			${css(...args)}
		}
	`;
};

const xlDevice = (...args) => {
	return css`
		@media (min-width: ${breakpoints.xl}px) {
			/* min-width: ${breakpoints.xl}px; */
			${css(...args)}
		}
	`;
};

const xxlDevice = (...args) => {
	return css`
		@media (min-width: ${breakpoints.xxl}px) {
			/* min-width: ${breakpoints.xxl}px; */
			${css(...args)}
		}
	`;
};

const customWidthMediaQuery = (minWidth, maxWidth, ...args) => {
	return css`
		@media (min-width: ${minWidth}) and (max-width: ${maxWidth}) {
			${css(...args)}
		}
	`;
};

const mediaQueryFor = {
	xsDevice,
	smDevice,
	mdDevice,
	lgDevice,
	xlDevice,
	xxlDevice,
	customWidthMediaQuery
};

export default mediaQueryFor;
