import SocialLinksStyled from "./styles/SocialLinksStyled";
function SocialLinks(props) {
  return (
    <SocialLinksStyled>
      {props.links.map((item, index) => {
        return (
          <a key={index} href={item.url} target="_blank" rel="noreferrer">
            <i className={item.cName}></i>
          </a>
        );
      })}
    </SocialLinksStyled>
  );
}

export default SocialLinks;
