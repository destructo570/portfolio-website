import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`;

export const StyledNavLinks = styled.ul`
  display: ${(props) => (!props.isClicked ? "none" : "block")};

  li {
    list-style: none;
  }

  li + li {
    margin-left: 1em;
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
