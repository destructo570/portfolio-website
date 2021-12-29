import SectionTitle from "../Global/SectionTitle";
import ProjectList from "./ProjectList";
import { StyledProjects } from "./styledComponents";

const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle title="Projects" />
      <ProjectList />
    </StyledProjects>
  );
};

export default Projects;
