import "./ProjectLinks.css";

function ProjectLinks(props) {
  return (
    <div className="project-links">
      {props.links.map((item, index) => {
        return (
          <div key={index} className="project-links-item">
            <i className={item.iconClassName}></i>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectLinks;
