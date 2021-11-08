import styled from "styled-components";

const ProjectLinksStyled = styled.div`
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

export default ProjectLinksStyled;
