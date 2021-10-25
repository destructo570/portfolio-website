import "./Projects.css";
import { ProjectList } from "./ProjectList";
import ProjectTechStack from "./ProjectTechStack";
import ProjectLinks from "./ProjectLinks";
function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div>
        {ProjectList.map((project, index) => {
          return (
            <div key={index} className={project.cName}>
              <div className="project__img">
                <img src={project.imgUrl} alt=""></img>
              </div>
              <div className="project__content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <ProjectTechStack techStack={project.techStack} />
                <ProjectLinks links={project.projectLinks} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
