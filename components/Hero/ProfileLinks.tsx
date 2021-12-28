import React from "react";
import { StyledProfileLinks } from "./styledComponents";
import ProfileLink from "../../models/ProfileLink";

const ProfileLinks: React.FC<{ links: ProfileLink[] }> = (props) => {
  const linkContent = props.links.map((link) => {
    return (
      <li key={link.title}>
        <a href={link.url} target="_blank" rel="noreferrer">
          <img src={link.imgUrl} alt={link.title} />
        </a>
      </li>
    );
  });
  return <StyledProfileLinks>{linkContent}</StyledProfileLinks>;
};

export default ProfileLinks;
