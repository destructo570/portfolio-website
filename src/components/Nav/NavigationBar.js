import { NavLinksList } from "./NavLinksList";
import { useState } from "react";
import NavIcon from "./NavIcon";
import NavLinks from "./styles/NavLinks";
import NavLogo from "./styles/NavLogo";
import NavStyled from "./styles/NavStyled";

function NavigationBar() {
  const [clicked, setClicked] = useState(false);

  const menuClickHandler = () => {
    setClicked((prevState) => {
      return !prevState;
    });
  };

  const navLinkHandler = () => {
    document.querySelector("#nav__menu").click();
  };

  return (
    <NavStyled>
      <NavLogo>
        <i className="ri-checkbox-blank-circle-line logo"></i>
      </NavLogo>
      <NavLinks isClicked={clicked}>
        <ul>
          {NavLinksList.map((item, index) => {
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
      </NavLinks>
      <NavIcon onMenuClicked={menuClickHandler} />
    </NavStyled>
  );
}

export default NavigationBar;
