import styled from "styled-components";

const ProjectContentStyled = styled.div`
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

export default ProjectContentStyled;
