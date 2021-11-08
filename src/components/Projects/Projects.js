import { ProjectList } from "./ProjectList";
import ProjectItems from "./ProjectItems";
import StyledDivider from "../Global/styledComponents/StyledDivider";
import { StyledProjects } from "./styledComponents";
function Projects() {
  return (
    <StyledProjects id="projects">
      <div>
        <h1>Projects</h1>
        <StyledDivider />
      </div>
      <ProjectItems projects={ProjectList} />
    </StyledProjects>
  );
}

export default Projects;
