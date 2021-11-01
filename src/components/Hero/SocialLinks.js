import "./SocialLinks.css";

function SocialLinks(props) {
  return (
    <div className="hero-socials">
      {props.links.map((item, index) => {
        return (
          <a key={index} href={item.url} className="social-link">
            <i className={item.cName}></i>
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
