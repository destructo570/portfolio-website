import "./NavigationBar.css";
import { NavLinks } from "./NavLinks";
import { useState } from "react";
import NavIcon from "./NavIcon";

function NavigationBar() {
  const [clicked, setClicked] = useState(false);

  const menuClickHandler = () => {
    setClicked((prevState) => {
      return !prevState;
    });
  };

  const navLinkHandler = () => {
    document.querySelector(".nav__menu-ico").click();
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <i className="ri-checkbox-blank-circle-line logo"></i>
      </div>
      <div className={clicked ? "nav__col" : "nav__col hide"}>
        <ul>
          {NavLinks.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  href={item.url}
                  onClick={navLinkHandler}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <NavIcon className="nav__menu" onMenuClicked={menuClickHandler} />
    </nav>
  );
}

export default NavigationBar;
