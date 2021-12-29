import styled from "styled-components";

export const StyledProjects = styled.section`
  li {
    list-style: none;
  }
`;

export const StyledProjectItem = styled.li`
  margin-bottom: 4em;
  img {
    max-width: 100%;
    border-radius: 8px;
  }

  h3 {
    font-weight: 400;
    font-size: 1.4rem;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    display: flex;
    justify-content: space-between;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    img {
      max-width: 50%;
      align-self: flex-start;
    }

    div:nth-child(2) {
      width: 100%;
      margin-top: 0;
    }
  }
`;

export const StyledProjectInfo = styled.div`
  margin-top: 0.5em;

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    padding: 0 2em;
  }
`;

export const StyledProjectTags = styled.ul`
  display: flex;
  margin-top: 1em;
  font-family: "Roboto Mono", mono;
  font-weight: 300;

  li + li {
    margin-left: 1em;
  }
`;
export const StyledProjectLinks = styled.ul`
  display: flex;

  margin-top: 1em;
  li + li {
    margin-left: 1em;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    img {
      max-width: 100%;
    }
  }
`;
