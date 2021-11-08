import ProjectLinksStyled from "./styles/ProjectLinksStyled";

function ProjectLinks(props) {
  return (
    <ProjectLinksStyled>
      {props.links.map((item, index) => {
        return (
          <a key={index} href={item.url} target="_blank" rel="noreferrer">
            <i className={item.iconClassName}></i>
          </a>
        );
      })}
    </ProjectLinksStyled>
  );
}

export default ProjectLinks;
