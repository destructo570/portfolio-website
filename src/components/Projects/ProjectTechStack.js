import ProjectTechStyled from "./styles/ProjectTechStyled";

function ProjectTechStack(props) {
  return (
    <ProjectTechStyled className="project-tech">
      {props.techStack.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </ProjectTechStyled>
  );
}

export default ProjectTechStack;
