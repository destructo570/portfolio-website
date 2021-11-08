import { useState } from "react";
import NavIconStyled from "./styles/NavIconStyled";

function NavIcon(props) {
  const [menuCLicked, setMenuClicked] = useState(false);
  const menuClickHandler = () => {
    setMenuClicked((prevState) => {
      return !prevState;
    });
    props.onMenuClicked();
  };
  return (
    <NavIconStyled onClick={menuClickHandler}>
      <i
        className={menuCLicked ? "ri-close-line ri-xl " : "ri-menu-line ri-xl "}
      ></i>
    </NavIconStyled>
  );
}

export default NavIcon;
