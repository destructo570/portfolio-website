import SocialLinks from "./SocialLinks";
import Button from "../Global/styledComponents/Button";
import { SocialLinksList } from "./SocialLinksList";
import { StyledHero } from "./styledComponents";

function Hero() {
  const contactHandler = (event) => {
    window.open("mailto:dev.vishalkashi@gmail.com", "_blank", "resizable=yes");
  };
  return (
    <StyledHero id="home">
      <div>
        <h3>Hi, my name is</h3>
        <h1>Vishal Kashi.</h1>
        <h1>I build things for the web and mobile.</h1>

        <p>
          I am a software engineer specializing in full stack web development
          using MERN stack. Also love to create mobile applications.
          <br />
          Currently open to new opportunities.
        </p>
        <SocialLinks links={SocialLinksList} />
        <Button onClick={contactHandler}>Contact</Button>
      </div>
    </StyledHero>
  );
}

export default Hero;
