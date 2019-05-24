import {createGlobalStyle} from 'styled-components';
import {colors} from './Colors';
import {Font} from './Font';
import {CSSReset} from './CSSReset';

export const GlobalStyle = createGlobalStyle`
	${CSSReset}

	* {
		box-sizing: border-box;
	}
	
	html {
		font-size: 62.5%;
		line-height: 190%;
	}

	body {
		font-size: 1.6rem;
		font-family: ${Font};
		background-color: ${colors.background};
        line-height: 170%; 
        color: ${colors.text}
    }
    
    button {
        font-size: 1.6rem;
        font: ${Font};
        background-color: ${colors.background};
        border: none;
        text-decoration: underline;
        transition: all .2s;
        color: ${colors.text};
        &:hover{
            color: ${colors.hoverColor};
        }
        &:active{
            color: ${colors.active};
        }
    }
	
	h1{
		font-weight: bold;
	}

	h2 {
		font-weight: bold;
		font-size: 2rem;
		color: ${colors.text};
	}

	h3 {
		font-weight: bold;
		font-size: 1.6rem;
		color: ${colors.text};
	}

	p {
		line-height: 1.8rem;
		font-size: 1.6rem;
		hyphens: auto;
		text-align: justify;
		text-indent: 2rem;
	}
`;
