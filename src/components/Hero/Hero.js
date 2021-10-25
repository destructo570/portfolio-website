import "./Hero.css";
import SocialLinks from "./SocialLinks";
import { SocialLinksList } from "./SocialLinksList";

function Hero() {
  const contactHandler = () => {};
  return (
    <section className="hero">
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
        <SocialLinks links={SocialLinksList} />
        <button className="hero-cta btn" onClick={contactHandler}>
          Contact
        </button>
      </div>
    </section>
  );
}

export default Hero;
