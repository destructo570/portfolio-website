import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  h3 {
    color: ${({ theme }) => theme.color.primaryAccent};
    font-weight: 400;
  }

  h1 {
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 600;
    margin-top: 0.4em;
    color: white;
  }

  h1 + h1 {
    color: ${({ theme }) => theme.color.secondaryText};
  }

  p {
    margin: 1em 0;
  }
`;

export const StyledProfileLinks = styled.ul`
  padding: 1em 0;
  display: flex;

  li {
    list-style: none;
  }

  a {
    top: 0;
    position: relative;
  }

  a:hover {
    top: -3px;
    transition: top ease 0.25s;
  }

  li + li {
    margin-left: 1em;
  }
`;
