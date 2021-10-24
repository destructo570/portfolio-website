import "./Hero.css";
import { HeroLinks } from "./HeroLinks";

function Hero() {
  const contactHandler = () => {};
  return (
    <figure className="hero">
      <div className="hero-img">
        <i className="ri-user-4-line ri-3x"></i>
      </div>
      <div className="hero__content">
        <h1 className="hero-title">Hello World!</h1>
        <p className="hero-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <div className="hero-links">
          {HeroLinks.map((item, index) => {
            return (
              <a key={index} href={item.url}>
                <i className={item.cName}></i>
              </a>
            );
          })}
        </div>
        <button className="hero-cta btn" onClick={contactHandler}>
          Contact
        </button>
      </div>
    </figure>
  );
}

export default Hero;
