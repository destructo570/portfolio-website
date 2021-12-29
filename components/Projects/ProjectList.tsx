import ProjectListData from "../../data/ProjectListData";
import ProjectTags from "./ProjectTags";
import ProjectLinks from "./ProjectLinks";
import { StyledProjectItem } from "./styledComponents";

const ProjectList = () => {
  const projectListItems = ProjectListData.map((project) => {
    return (
      <StyledProjectItem key={project.id}>
        <img src={project.imgUrl} alt="" />
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ProjectTags tags={project.tags} />
          <ProjectLinks links={project.projectLinks} />
        </div>
      </StyledProjectItem>
    );
  });
  return <ul>{projectListItems}</ul>;
};

export default ProjectList;
