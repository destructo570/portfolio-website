import "./ProjectTechStack.css";

function ProjectTechStack(props) {
  return (
    <div className="project-tech">
      {props.techStack.map((item, index) => {
        return (
          <p key={index} className="tech-item">
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default ProjectTechStack;
