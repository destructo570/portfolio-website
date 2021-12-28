import ProfileLinks from "./ProfileLinks";
import { StyledHero } from "./styledComponents";
import ProfileLinksList from "../../data/ProfileLinksList";

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <h3>Hi, my name is</h3>
        <h1>Vishal Kashi.</h1>
        <h1>I build things for the web and mobile.</h1>

        <p>
          I am a software engineer specializing in web and mobile apps with a
          focus on user-centered design and accessibility. <br />
          Currently learning web development and looking for new opportunities.
        </p>
        <ProfileLinks links={ProfileLinksList} />
        {/* <SocialLinks links={SocialLinksList} />
        <Button onClick={contactHandler}>Contact</Button> */}
      </div>
    </StyledHero>
  );
};

export default Hero;
