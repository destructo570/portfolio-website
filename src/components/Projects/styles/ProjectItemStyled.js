import styled from "styled-components";

const ProjectItemStyled = styled.div`
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
      margin-left: 6rem;
    }

    &:nth-child(even) > div:last-child {
      margin-right: 6rem;
    }
  }
`;

export default ProjectItemStyled;
