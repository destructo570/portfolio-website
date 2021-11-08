import { StyledProjectLinks } from "./styledComponents";

function ProjectLinks(props) {
  return (
    <StyledProjectLinks>
      {props.links.map((item, index) => {
        return (
          <a key={index} href={item.url} target="_blank" rel="noreferrer">
            <i className={item.iconClassName}></i>
          </a>
        );
      })}
    </StyledProjectLinks>
  );
}

export default ProjectLinks;
