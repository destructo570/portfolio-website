import ProfileLinks from "./ProfileLinks";
import { StyledHero } from "./styledComponents";
import ProfileLinksList from "../../data/ProfileLinksList";
import Button from "../Global/Button";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const ctaHandler = () => {
    router.push("mailto:dev.vishalkashi@gmail.com");
  };
  return (
    <StyledHero>
      <h3>Hi, my name is</h3>
      <h1>Vishal Kashi.</h1>
      <h1>I build things for the web and mobile.</h1>
      <p>
        I am a software engineer specializing in web and mobile apps with a
        focus on user-centered design and accessibility. <br />
        Currently learning web development and looking for new opportunities.
      </p>
      <ProfileLinks links={ProfileLinksList} />
      <Button onClick={ctaHandler} title="Let's Talk" />
    </StyledHero>
  );
};

export default Hero;
