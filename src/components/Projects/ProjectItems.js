import ProjectLinks from "./ProjectLinks";
import ProjectTechStack from "./ProjectTechStack";
import {
  StyledProjectItem,
  StyledProjectImage,
  StyledProjectContent,
} from "./styledComponents";

function ProjectItems(props) {
  return (
    <div>
      {props.projects.map((project, index) => {
        return (
          <StyledProjectItem key={index} isEven={project.id % 2 === 0 && true}>
            <StyledProjectImage>
              <img src={project.imgUrl} alt=""></img>
            </StyledProjectImage>
            <StyledProjectContent>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ProjectTechStack techStack={project.techStack} />
              <ProjectLinks links={project.projectLinks} />
            </StyledProjectContent>
          </StyledProjectItem>
        );
      })}
    </div>
  );
}

export default ProjectItems;
