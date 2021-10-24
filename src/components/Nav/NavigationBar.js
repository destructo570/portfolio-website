import "./NavigationBar.css";
import { MenuItems } from "./MenuItems";
import { useState } from "react";

function NavigationBar() {
  const [clicked, setClicked] = useState(false);

  const menuClickHandler = () => {
    setClicked((prevState) => {
      return !prevState;
    });
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <i class="ri-checkbox-blank-circle-line logo"></i>
      </div>
      <div className={clicked ? "nav__col" : "nav__col hide"}>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav__menu" onClick={menuClickHandler}>
        <i
          className={
            clicked
              ? "ri-close-line ri-xl menu__icon"
              : "ri-menu-line ri-xl menu__icon"
          }
        ></i>
      </div>
    </nav>
  );
}

export default NavigationBar;
