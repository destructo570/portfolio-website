import "./SocialLinks.css";

function SocialLinks(props) {
  return (
    <div className="hero-socials">
      {props.links.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="social-link color-transition"
          >
            <i className={item.cName}></i>
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
