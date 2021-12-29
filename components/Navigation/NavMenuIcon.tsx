import React, { useState } from "react";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import { StyledNavMenuIcon } from "./styledComponents";

const NavMenuIcon: React.FC<{ onMenuClicked: () => void }> = (props) => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);

  const navIcon = !menuClicked ? menuIcon : closeIcon;
  const menuClickHandler = () => {
    setMenuClicked((prevState) => {
      const newState = !prevState;
      return newState;
    });
    props.onMenuClicked();
  };

  return (
    <StyledNavMenuIcon
      src={navIcon.src}
      id="nav__menu"
      onClick={menuClickHandler}
      alt="nav menu"
    />
  );
};

export default NavMenuIcon;
