import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	/* Essas cores deverão ser utilizadas para compor as principais seções, onde essas cores irão ser norteadoras para fixar as cores da identidade visual da marca. */
	:root {
		/* Essas cores deverão ser utilizadas para compor as principais seções, onde essas cores irão ser norteadoras para fixar as cores da identidade visual da marca. */
		--green-dark: #27ae60;
		--green-light: #93d7af;
		--red-medium: #eb5757;
		/*Essas cores deverão ser utilizadas em elementos como botões, textos e background’s. Dessa forma a aplicação irá obter de uma hierarquia visual por meio das variações entre as tonalidades.*/

		--gray-dark: #333333;
		--gray-medium: #828282;
		--gray-light: #e0e0e0;
		--gray-none: #f5f5f5;
		--white: #FFFFFF;
		--black: #333333;

		/* Cores semafóricas ou cores de sinais, devem indicar e transmitir estados da aplicação por meio de feedbacks visuais, como alerta de erro, sucesso de envio e as demais sinalizações positivas ou negativas para o usuário. */

		--negative-red: #e60000;
		--warning-yellow: #ffcd07;
		--sucess-green: #168821;
		--information-blue: #155bcb;

		/* Typography */

		--font-base: "Inter", sans-serif;
	}

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}



`;

export default GlobalStyle;
