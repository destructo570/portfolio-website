import "./SocialLinks.css";

function SocialLinks(props) {
  return (
    <div className="hero-socials">
      {props.links.map((item, index) => {
        return (
          <a key={index} href={item.url}>
            <i className={item.cName}></i>
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
