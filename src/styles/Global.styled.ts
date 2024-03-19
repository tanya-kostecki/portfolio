import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.darkBg};
        color: ${theme.colors.darkFont};
        line-height: 1.2;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.darkFont};
        transition: .2s ease-in-out;
    }

    a:hover {
        transform: scale(1.4);
        /* color: yellow; */
        
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        transition: .2s ease-in-out;
    }

    button:hover {
        transform: scale(1.2);
    }

    section {
        padding: 100px 0;

        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }
  
`