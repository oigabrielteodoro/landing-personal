import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;

    --black-100: #1D1F20;
    --black-400: #212223;
    --black-800: #131515;

    --gray-100: #CCCCCC;
    --gray-400: #737380;

    --blue-400: #407BFF;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--black-800);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea {
    font-family: 'Rubik', sans-serif;
    color: var(--white);
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: 'Fira Code', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .blue-color {
    color: var(--blue-400);
  }
`;

export { GlobalStyle };
