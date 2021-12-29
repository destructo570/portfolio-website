import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  position: relative;
`;

export const StyledNavLinks = styled.ul<{ isClicked: boolean }>`
  display: ${(props) => (props.isClicked ? "block" : "none")};
  background-color: ${({ theme }) => theme.color.body};
  position: absolute;
  width: 100%;
  margin-top: 4em;

  li {
    list-style: none;
    width: 100%;
    text-align: center;
    margin-top: 0.5em;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primaryText};
  }

  a:hover {
    color: ${({ theme }) => theme.color.primaryAccent};
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    display: flex;
    margin: 0;
    width: auto;
    position: relative;

    li {
      width: auto;
      text-align: center;
      margin-top: 0;
    }

    li + li {
      margin-left: 1em;
    }
  }
`;

export const StyledNavMenuIcon = styled.img`
  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    display: none;
  }
`;
