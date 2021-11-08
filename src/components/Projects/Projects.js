import { ProjectList } from "./ProjectList";
import ProjectItems from "./ProjectItems";
import ProjectsStyled from "./styles/ProjectsStyled";
import TextHighlight from "../UI/styles/TextHighlight";
function Projects() {
  return (
    <ProjectsStyled id="projects">
      <div>
        <h1>Projects</h1>
        <TextHighlight />
      </div>
      <ProjectItems projects={ProjectList} />
    </ProjectsStyled>
  );
}

export default Projects;
