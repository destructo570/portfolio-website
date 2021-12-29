import styled from "styled-components";

export const StyledAboutMe = styled.section`
  img {
    max-width: 100%;
    border-radius: 8px;
    filter: grayscale(1);
    transition: filter 0.6s;
  }

  img:hover {
    filter: grayscale(0);
    transition: filter 0.6s;
  }
  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    img {
      align-self: flex-start;
    }
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
export const StyledAboutContent = styled.ul`
  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    display: flex;
  }
`;
export const StyledAboutInfo = styled.div`
  margin-top: 1em;
  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    margin-left: 2em;
    margin-top: 0;
  }
`;
