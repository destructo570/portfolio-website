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

  //Add white space between img and info
  div:nth-child(2) {
    margin-top: 0.5em;
  }

  h3 {
    font-weight: 400;
    font-size: 1.4rem;
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
`;
