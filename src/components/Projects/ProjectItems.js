import ProjectTechStack from "./ProjectTechStack";
import ProjectLinks from "./ProjectLinks";
import ProjectItemStyled from "./styles/ProjectItemStyled";
import ProjectImageStyled from "./styles/ProjectImageStyled";
import ProjectContentStyled from "./styles/ProjectContentStyled";

function ProjectItems(props) {
  return (
    <div>
      {props.projects.map((project, index) => {
        return (
          <ProjectItemStyled key={index} isEven={project.id % 2 === 0 && true}>
            <ProjectImageStyled>
              <img src={project.imgUrl} alt=""></img>
            </ProjectImageStyled>
            <ProjectContentStyled>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ProjectTechStack techStack={project.techStack} />
              <ProjectLinks links={project.projectLinks} />
            </ProjectContentStyled>
          </ProjectItemStyled>
        );
      })}
    </div>
  );
}

export default ProjectItems;
