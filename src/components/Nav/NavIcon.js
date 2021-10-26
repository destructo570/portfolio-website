import { useState } from "react";
import "./NavIcon.css";

function NavIcon(props) {
  const [menuCLicked, setMenuClicked] = useState(false);
  const menuClickHandler = () => {
    setMenuClicked((prevState) => {
      return !prevState;
    });
    props.onMenuClicked();
  };
  return (
    <div className="nav__menu" onClick={menuClickHandler}>
      <i
        className={
          menuCLicked
            ? "ri-close-line ri-xl menu__icon"
            : "ri-menu-line ri-xl menu__icon"
        }
      ></i>
    </div>
  );
}

export default NavIcon;
