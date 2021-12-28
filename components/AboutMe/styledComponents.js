import styled from "styled-components";

export const StyledAboutMe = styled.section`
  p {
    margin: 1em 0;
  }

  img {
    border-radius: 8px;
    filter: grayscale(1);
    transition: filter 0.6s;
  }

  img:hover {
    filter: grayscale(0);
    transition: filter 0.6s;
  }
`;

export const StyledAboutSkills = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  li {
    list-style: none;
    display: flex;
  }

  li p {
    margin-left: 0.5em;
  }
  p {
    margin: 0;
  }
`;
