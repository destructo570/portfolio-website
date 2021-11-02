import "./Hero.css";
import SocialLinks from "./SocialLinks";
import { SocialLinksList } from "./SocialLinksList";

function Hero() {
  const contactHandler = (event) => {
    window.open("mailto:dev.vishalkashi@gmail.com", "_blank", "resizable=yes");
  };
  return (
    <section className="hero">
      {/* <div className="hero__img">
        <i className="ri-user-4-line ri-3x"></i>
      </div> */}
      <div className="hero__content">
        <h1 className="hero-intro-title">Hi, my name is</h1>
        <h1 className="hero-title-name">John Doe.</h1>
        <h1 className="hero-title">I build things for the web and mobile.</h1>

        <p className="hero-body">
          I am a software engineer specializing in web and mobile apps with a
          focus on user-centered design and accessibility. Currently learning
          web development and looking for new opportunities.
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
