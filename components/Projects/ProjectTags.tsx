import React from "react";
import { StyledProjectTags } from "./styledComponents";

const ProjectTags: React.FC<{ tags: string[] }> = (props) => {
  const projectTags = props.tags.map((tag) => {
    return <li key={tag}>{tag}</li>;
  });
  return <StyledProjectTags>{projectTags}</StyledProjectTags>;
};

export default ProjectTags;
