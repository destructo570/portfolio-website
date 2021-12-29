import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  color: {
    body: "rgb(0,0,0)",
    primaryText: "#ffffff",
    secondaryText: "rgba(206, 206, 206, 0.719)",
    primaryAccent: "#2fdd92",
    primaryAccentLight: "#31b37a",
    secondaryAccent: "rgba(48, 250, 223, 0.233)",
    secondaryAccentLight: "rgba(147, 245, 232, 0.568)",
  },
  layout: {
    small: {
      media: "",
      pagePadding: "2em",
    },
    medium: {
      media: "768px",
      pagePadding: "2em",
    },
    large: {
      media: "1200px",
      pagePadding: "2em",
    },
  },
};

export const lightTheme = {
  color: {
    body: "rgb(0,0,0)",
    primaryText: "#ffffff",
    secondaryText: "rgba(206, 206, 206, 0.719)",
    primaryAccent: "#2fdd92",
    primaryAccentLight: "#31b37a",
    secondaryAccent: "rgba(48, 250, 223, 0.233)",
    secondaryAccentLight: "rgba(147, 245, 232, 0.568)",
  },
  layout: {
    small: {
      media: "",
      pagePadding: "2em",
    },
    medium: {
      media: "768px",
      pagePadding: "2em",
    },
    large: {
      media: "1200px",
      pagePadding: "2em",
    },
  },
};

const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");

*{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body{
  padding-left: ${({ theme }) => theme.layout.small.pagePadding};
  padding-right: ${({ theme }) => theme.layout.small.pagePadding};
  background-color: ${({ theme }) => theme.color.body};
  color: ${({ theme }) => theme.color.primaryText};
  transition: all 0.30s linear;
  font-family: "Poppins", san-serif;

}

section{
  padding: 2em 0;
}

/* Change text selection colors */
::-moz-selection {
  /* Code for Firefox */
  color: ${({ theme }) => theme.color.primaryText};
  background: ${({ theme }) => theme.color.primaryAccent};
}

::selection {
  color: ${({ theme }) => theme.color.primaryText};
  background: ${({ theme }) => theme.color.primaryAccent};
}
`;

export default GlobalStyles;
