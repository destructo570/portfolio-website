import "./ProjectItems.css";
import ProjectTechStack from "./ProjectTechStack";
import ProjectLinks from "./ProjectLinks";
function ProjectItems(props) {
  return (
    <div>
      {props.projects.map((project, index) => {
        return (
          <div key={index} className={project.cName}>
            <div className="project-img">
              <img src={project.imgUrl} alt=""></img>
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <ProjectTechStack techStack={project.techStack} />
              <ProjectLinks links={project.projectLinks} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectItems;
