import NavLinksList from "../../data/NavLinksList";
import { StyledNavLinks } from "./styledComponents";
const NavLinks = () => {
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
  return <StyledNavLinks>{navLinksContent}</StyledNavLinks>;
};

export default NavLinks;
