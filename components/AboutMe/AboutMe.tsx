import SectionTitle from "../Global/SectionTitle";
import {
  StyledAboutMe,
  StyledAboutSkills,
  StyledAboutContent,
  StyledAboutInfo,
} from "./styledComponents";
import SkillsList from "../../data/SkillsList";
const AboutMe = () => {
  const skillsList = SkillsList.map((skill, index) => {
    return (
      <li key={index}>
        <img
          src="https://raw.githubusercontent.com/destructo570/portfolio-website-v1/with-typescript/assets/icons/arrow-right.svg"
          alt=""
        />
        <p>{skill}</p>
      </li>
    );
  });
  return (
    <StyledAboutMe id="about">
      <SectionTitle title="About Me" />
      <StyledAboutContent>
        <img src="https://picsum.photos/400/400" alt="vishal kashi" />
        <StyledAboutInfo>
          <p>
            Hey there!, my name is Vishal and I like to build cool stuff for web
            and mobile with a focus on design and user experience. <br />
            <br />
            I am a Frontend developer with experience in working with frameworks
            like React and NextJs.
            <br />
            <br />
          </p>
          <div>
            <p>Some of my skills and tech I have experience with</p>
            <StyledAboutSkills>{skillsList}</StyledAboutSkills>
          </div>
        </StyledAboutInfo>
      </StyledAboutContent>
    </StyledAboutMe>
  );
};

export default AboutMe;
