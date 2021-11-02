import "./ProjectLinks.css";

function ProjectLinks(props) {
  return (
    <div className="project-links">
      {props.links.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="project-links-item"
          >
            <i className={item.iconClassName}></i>
          </a>
        );
      })}
    </div>
  );
}

export default ProjectLinks;
