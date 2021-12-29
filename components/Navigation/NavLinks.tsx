import NavLinksList from "../../data/NavLinksList";
import { StyledNavLinks } from "./styledComponents";

const NavLinks: React.FC<{ isClicked: boolean }> = (props) => {
  const navLinksContent = NavLinksList.map((link, index) => {
    const navLinkHandler = () => {};
    return (
      <li key={index}>
        <a href={link.url} onClick={navLinkHandler}>
          {link.title}
        </a>
      </li>
    );
  });
  return (
    <StyledNavLinks isClicked={props.isClicked}>
      {navLinksContent}
    </StyledNavLinks>
  );
};

export default NavLinks;
