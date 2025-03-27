// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: "Kanit", sans-serif;
        box-sizing: border-box;
        scroll-behavior: smooth; /* 부드러운 스크롤 */
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    p {
        margin: 0;
    }

    ul, ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;