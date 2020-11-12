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
    font-family: Arial, sans-serif;
  }

  button{
    cursor: pointer;
  }

  ul {
    margin-left: 1.25rem;
    font-size: 1rem;
    line-height: 1.25rem;
  }

  
  p {
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 400;
  }

  h1 {
    margin: 0;
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 500;
  }
  h2 {
    font-size: 2.25rem;
    line-height: 2.25rem;
    font-weight: 400;
  }

  blockquote {
    max-width: 320px;
    margin: 0 auto;

    & p {
      font-style: italic;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.15rem;
      line-height: 1.5rem;

      &::before, &::after {
        content: "";
        display: block;
        width: 60px;
        height: 3px;
        background: #fff;
        margin: 14px auto 10px auto;
      }
    }

    & cite {
      font-style: normal;
      font-weight: bold;
      font-size: 1.25rem;
      letter-spacing: .1em;
    }
  }
`;
