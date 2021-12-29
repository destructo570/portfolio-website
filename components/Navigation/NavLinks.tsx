import NavLinksList from "../../data/NavLinksList";
import { StyledNavLinks } from "./styledComponents";

const NavLinks: React.FC<{
  isClicked: boolean;
  onMenuClicked: () => void;
}> = (props) => {
  const navLinksContent = NavLinksList.map((link, index) => {
    const navLinkHandler = () => {
      props.onMenuClicked();
    };
    return (
      <li key={index} onClick={navLinkHandler}>
        <a href={link.url}>{link.title}</a>
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
