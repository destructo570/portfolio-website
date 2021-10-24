import "./Projects.css";
import { ProjectList } from "./ProjectList";
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
                <div className="project-tech">
                  {project.techStack.map((item, index) => {
                    return (
                      <p key={index} className="tech-item">
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div className="project-links">
                  {project.projectLinks.map((item, index) => {
                    return (
                      <div key={index} className="project-links-item">
                        <i className={item.iconClassName}></i>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
