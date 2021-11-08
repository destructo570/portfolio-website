import SocialLinks from "./SocialLinks";
import Button from "../UI/styles/Button";
import { SocialLinksList } from "./SocialLinksList";
import { HeroStyled } from "./styles/HeroStyled";

function Hero() {
  const contactHandler = (event) => {
    window.open("mailto:dev.vishalkashi@gmail.com", "_blank", "resizable=yes");
  };
  return (
    <HeroStyled id="home">
      <div>
        <h3>Hi, my name is</h3>
        <h1>Vishal Kashi.</h1>
        <h1>I build things for the web and mobile.</h1>

        <p>
          I am a software engineer specializing in web and mobile apps with a
          focus on user-centered design and accessibility. <br />
          Currently learning web development and looking for new opportunities.
        </p>
        <SocialLinks links={SocialLinksList} />
        <Button onClick={contactHandler}>Contact</Button>
      </div>
    </HeroStyled>
  );
}

export default Hero;
