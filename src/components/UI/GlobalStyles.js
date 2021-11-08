import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@200;300;400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");
:root {
  --text-primary: white;
  --text-secondary: rgb(206, 206, 206);
  --text-tertiary: rgba(206, 206, 206, 0.719);

  --accent-primary: #2fdd92;
  --accent-primary-light: #31b37a;
  --accent-secondary: rgba(48, 250, 223, 0.233);
  --accent-secondary-light: rgba(147, 245, 232, 0.568);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

/* Change text selection colors */
::-moz-selection {
  /* Code for Firefox */
  color: var(--text-primary);
  background: var(--accent-primary-light);
}

::selection {
  color: var(--text-primary);
  background: var(--accent-primary-light);
}

body {
  margin: 0;
  font-family: "Poppins", serif !important;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: black;
  color: var(--text-secondary, white);
}

h1,
h2,
h3 {
  font-weight: 400;
  color: var(--text-primary, white);
}

img {
  max-width: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.semi--bold {
  font-weight: 600;
}

.color-transition {
  transition: color 0.5s;
}

`;

export default GlobalStyle;
