import "./Projects.css";
import { ProjectList } from "./ProjectList";
import ProjectItems from "./ProjectItems";
function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <ProjectItems projects={ProjectList} />
    </section>
  );
}

export default Projects;
