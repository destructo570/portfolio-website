import styled from "styled-components";

const ProjectImageStyled = styled.div`
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

export default ProjectImageStyled;
