import "./Projects.css";
import { ProjectList } from "./ProjectList";
import ProjectItems from "./ProjectItems";
function Projects() {
  return (
    <section className="projects">
      <div>
        <h1 className="projects__title semi--bold">Projects</h1>
        <div className="sec-divider"></div>
      </div>
      <ProjectItems projects={ProjectList} />
    </section>
  );
}

export default Projects;
