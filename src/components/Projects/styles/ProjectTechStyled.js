import styled from "styled-components";

const ProjectTechStyled = styled.div`
  display: flex;
  font-family: "Noto Sans Mono", serif;
  font-weight: 400;
  font-size: 0.9rem;
  margin: 1rem 0;

  p + p {
    margin-left: 1rem;
  }
`;

export default ProjectTechStyled;
