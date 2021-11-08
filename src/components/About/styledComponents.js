import styled from "styled-components";

export const StyledAbout = styled.section`
  min-height: 75vh;

  h1 {
    margin-bottom: 1rem;
    font-weight: 700;
  }
`;

export const StyledBody = styled.div`
  @media (min-width: 800px) {
    max-width: 55%;
  }
`;

export const StyledContent = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;

export const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;

  img {
    border-radius: 8px;
    filter: grayscale(1);
    transition: filter 0.6s;
  }

  img:hover {
    filter: grayscale(0);
    transition: filter 0.6s;
  }

  @media (min-width: 800px) {
    min-width: 40%;
    align-self: flex-start;
    padding: 0 2.5rem;
  }
`;

export const StyledSkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 0;

  div {
    display: flex;
    align-items: center;
  }
`;
