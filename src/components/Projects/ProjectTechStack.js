import { StyledTechStack } from "./styledComponents";

function ProjectTechStack(props) {
  return (
    <StyledTechStack className="project-tech">
      {props.techStack.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </StyledTechStack>
  );
}

export default ProjectTechStack;
