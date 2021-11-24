import { createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

  .container {
    margin: 0 auto;
  }

  @media screen and (max-width: 374px) {
    .container {
      max-width: 288px;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    .container {
      max-width: 337px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .container {
      max-width: 720px;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    .container {
      max-width: 960px;
    }
  }
  @media screen and (min-width: 1366px) and (max-width: 1919px) {
    .container {
      max-width: 1140px;
    }
  }
  @media screen and (min-width: 1920px) {
    .container {
      max-width: 1320px;
    }
  }
  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  
  body {
    font-size: 14px;
    background: #f3f3f3;
    color: #000;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;