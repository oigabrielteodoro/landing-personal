import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;

    --black-100: #1D1F20;
    --black-400: #212223;
    --black-800: #131515;

    --gray-100: #CCCCCC;
    --gray-400: #737380;

    --pink-500: #FF3366;
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

  h1, button {
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

  &::-webkit-scrollbar {
    width: 0.625rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--black-400);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--pink-500);
  }

  &::selection {
    color: #fff;
    background: var(--pink-500);
  }

  &::-moz-selection {
    color: #fff;
    background: var(--pink-500);
  }

  input:-webkit-autofill {
    box-shadow:0 0 0 3.125rem var(--black-800) inset;
    -webkit-text-fill-color: #fff;
  }

  input:-webkit-autofill:focus {
    box-shadow: 0 0 0 3.125rem var(--black-800) inset;
    -webkit-text-fill-color: #fff;
  }

  .blue-color {
    color: var(--pink-500);
  }

  .gray-color {
    color: var(--gray-100);
  }
`;

export { GlobalStyle };
