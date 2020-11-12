import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    min-height: 100%;
    overflow-x: hidden;
  }
  
  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', Arial, sans-serif;
  }

  button{
    cursor: pointer;
  }

  ul {
    margin-left: 1.25rem;
  }

  h1 {
    margin: 0;
    font-size: 3rem;
    font-weight: 500;
  }
  h2 {
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 1.25;
  }
`;
