import { useState } from "react";
import { StyledNavIcon } from "./styledComponents";

function NavIcon(props) {
  const [menuCLicked, setMenuClicked] = useState(false);
  const menuClickHandler = () => {
    setMenuClicked((prevState) => {
      return !prevState;
    });
    props.onMenuClicked();
  };
  return (
    <StyledNavIcon id="nav__menu" onClick={menuClickHandler}>
      <i
        className={menuCLicked ? "ri-close-line ri-xl " : "ri-menu-line ri-xl "}
      ></i>
    </StyledNavIcon>
  );
}

export default NavIcon;
