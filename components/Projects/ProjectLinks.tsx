import { StyledProjectLinks } from "./styledComponents";

type ProjectLink = { iconUrl: string; url: string };
const ProjectLinks: React.FC<{ links: ProjectLink[] }> = (props) => {
  const projectLinksItems = props.links.map((link) => {
    return (
      <li key={link.url}>
        <a href={link.url} target="_blank" rel="noreferrer">
          <img src={link.iconUrl} alt=""></img>
        </a>
      </li>
    );
  });
  return <StyledProjectLinks>{projectLinksItems}</StyledProjectLinks>;
};

export default ProjectLinks;
