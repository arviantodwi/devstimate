import { createGlobalStyle } from "styled-components";

import { BASE_FONT_SIZE, COLOR_ATHENS, COLOR_OUTLINE } from "./constants";

export default createGlobalStyle`
  *, ::after, ::before {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${COLOR_ATHENS.HEX};
    font-size: ${BASE_FONT_SIZE}px;
    font-weight: 400;
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  abbr {
    cursor: help;
  }

  a, input, textarea, select, button {
    &:focus-visible {
      outline: none;
      box-shadow:
        inset -999px 0 rgba(255, 255, 255, 7.5%),
        0 0 0 2px white,
        0 0 0 4px ${COLOR_OUTLINE.HEX} !important;
    }
  }

  #root {
    min-height: 100vh;
  }
`;
