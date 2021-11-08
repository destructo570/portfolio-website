import { StyledSocialLinks } from "./styledComponents";
function SocialLinks(props) {
  return (
    <StyledSocialLinks>
      {props.links.map((item, index) => {
        return (
          <a key={index} href={item.url} target="_blank" rel="noreferrer">
            <i className={item.cName}></i>
          </a>
        );
      })}
    </StyledSocialLinks>
  );
}

export default SocialLinks;
