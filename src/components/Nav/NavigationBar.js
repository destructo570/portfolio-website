import { NavLinksList } from "./NavLinksList";
import { useState } from "react";
import NavIcon from "./NavIcon";
import { StyledNavLinks, StyledNavLogo, StyledNav } from "./styledComponents";
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
    <StyledNav>
      <StyledNavLogo>
        <i className="ri-checkbox-blank-circle-line logo"></i>
      </StyledNavLogo>
      <StyledNavLinks isClicked={clicked}>
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
      </StyledNavLinks>
      <NavIcon onMenuClicked={menuClickHandler} />
    </StyledNav>
  );
}

export default NavigationBar;
