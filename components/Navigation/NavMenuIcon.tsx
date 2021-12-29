import React from "react";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import { StyledNavMenuIcon } from "./styledComponents";

const NavMenuIcon: React.FC<{ isClicked: boolean; onMenuClicked: () => void }> =
  (props) => {
    let navIcon = !props.isClicked ? menuIcon : closeIcon;

    return (
      <StyledNavMenuIcon
        src={navIcon.src}
        id="nav__menu"
        onClick={props.onMenuClicked}
        alt="nav menu"
      />
    );
  };

export default NavMenuIcon;
