import {css} from 'styled-components';

// const RGBAActiveOrange = () => css`rgba(239, 141, 52, .5)`;
const RGBAActiveDark = () => css`rgba(35, 35, 35, .8)`;
// const RGBAActiveLight = () => css`rgba(239, 141, 52, .5)`;

const palette = {
	activeOrange: '#EF8D34',
	blackHole: '#000000',
	jetBlack: '#111111',
	black: '#232323',
	print: '#363636',
	gray: '#828282',
	darkGray: '#9D9D9D',
	lightGray: '#c1c1c1',
	pleasantWhite: '#DDDDDD',
	smokeGray: '#f9f9f9',
	white: '#FEFEFE',
	strictWhite: '#FFFFFF',
	opaqueActiveOrange: RGBAActiveDark
};

export const colors = {
	background: palette.smokeGray,
	foreground: palette.jetBlack,
	textOnBG: palette.jetBlack,
	textOnFG: palette.pleasantWhite,
	hoverColor: palette.gray,
	active: palette.activeOrange,
	inactive: palette.darkGray,
	warning: palette.gray,
	alert: palette.print,
	activeOpaque: palette.opaqueActiveOrange
};
