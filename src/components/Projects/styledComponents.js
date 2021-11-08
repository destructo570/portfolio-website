import styled from "styled-components";

export const StyledProjectContent = styled.div`
  h2 {
    margin-top: 0.8rem;
  }

  p {
    margin-top: 0.25rem;
  }

  @media (min-width: 800px) {
    width: 50%;

    h2 {
      margin: 0;
    }
  }
`;

export const StyledProjectImage = styled.div`
  img {
    border-radius: 8px;
    min-height: 300px;
    width: 100%;
    object-fit: cover;
  }

  img:hover {
    cursor: pointer;
  }

  @media (min-width: 800px) {
    align-self: flex-start;
    width: 50%;

    img {
      align-self: flex-start;
      width: 100%;
    }
  }
`;

export const StyledProjectItem = styled.div`
  margin: 3rem 0;

  /* Media Queries */

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    filter: grayscale(1);
    transition: filter 0.6s;
    margin: 6rem 0;
    flex-direction: ${(props) => (props.isEven ? "row-reverse" : "row")};

    &:hover {
      filter: grayscale(0);
      transition: filter 0.6s;
    }

    &:nth-child(odd) > div:last-child {
      margin-left: 2.5rem;
    }

    &:nth-child(even) > div:last-child {
      margin-right: 2.5rem;
    }
  }
`;

export const StyledProjectLinks = styled.div`
  display: flex;

  a {
    padding: 1rem 0;
    color: white;
    text-decoration: none;
    position: relative;
    top: 0px;
  }

  a:hover {
    color: var(--accent-primary);
    top: -3px;
    transition: top ease 0.25s;
  }

  a + a {
    margin-left: 1rem;
  }
`;

export const StyledProjects = styled.section`
  margin-top: 3rem;

  h1 {
    margin-bottom: 1rem;
    font-weight: 600;
  }
`;

export const StyledTechStack = styled.div`
  display: flex;
  font-family: "Noto Sans Mono", serif;
  font-weight: 400;
  font-size: 0.9rem;
  margin: 1rem 0;

  p + p {
    margin-left: 1rem;
  }
`;
