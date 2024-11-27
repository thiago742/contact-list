import { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background: #0f0f0f;
  }
`;

export default EstiloGlobal;
