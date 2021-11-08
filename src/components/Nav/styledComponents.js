import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 1rem 0;

  .nav__col {
    background-color: black;
    display: flex;
    justify-content: center;
    position: absolute;
    padding: 2.5rem 0;
    top: 2.6rem;
    width: 100%;
    z-index: 100;
  }

  /* Utility Classes */

  .hide {
    display: none;
  }

  /* Media Queries */

  @media (min-width: 800px) {
    .nav {
      display: flex;
      justify-content: space-between;
    }

    .nav__col {
      display: block;
      position: static;
      width: auto;
      padding: 0;
    }

    ul {
      display: flex;
    }

    li + li {
      margin-top: 0;
      margin-left: 1.5rem;
    }
  }

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledNavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }

  /* Media Queries */

  @media (min-width: 800px) {
    display: none;
  }
`;

export const StyledNavLinks = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 2.5rem 0;
  top: 2.6rem;
  width: 100%;
  z-index: 100;
  display: ${(props) => (!props.isClicked ? "none" : "block")};

  li {
    list-style: none;
    text-align: center;
  }

  li + li {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: var(--accent-primary);
  }

  @media (min-width: 800px) {
    display: block;
    position: static;
    width: auto;
    padding: 0;

    ul {
      display: flex;
    }

    li + li {
      margin-top: 0;
      margin-left: 1.5rem;
    }
  }
`;

export const StyledNavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
