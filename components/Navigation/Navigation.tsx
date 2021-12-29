import { StyledNavigation } from "./styledComponents";
import NavMenuIcon from "./NavMenuIcon";
import { useState } from "react";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const menuHandler = () => {
    setClicked((prevState) => {
      const newState = !prevState;
      return newState;
    });
  };

  return (
    <StyledNavigation>
      <img
        src="https://raw.githubusercontent.com/destructo570/portfolio-website-v1/with-typescript/assets/icons/logo.svg"
        alt="logo"
      />
      <NavLinks isClicked={clicked} />
      <NavMenuIcon onMenuClicked={menuHandler} />
    </StyledNavigation>
  );
};

export default Navigation;
