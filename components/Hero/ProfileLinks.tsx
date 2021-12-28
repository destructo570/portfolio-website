import React from "react";
import { StyledProfileLinks } from "./styledComponents";

type ProfileLink = { title: string; url: string; imgUrl: string };

const ProfileLinks: React.FC<{ links: ProfileLink[] }> = (props) => {
  const linkContent = props.links.map((link) => {
    return (
      <li key={link.title}>
        <a href={link.url}>
          <img src={link.imgUrl} alt={link.title} />
        </a>
      </li>
    );
  });
  return <StyledProfileLinks>{linkContent}</StyledProfileLinks>;
};

export default ProfileLinks;
