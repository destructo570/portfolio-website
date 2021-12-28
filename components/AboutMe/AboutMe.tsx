import SectionTitle from "../Global/SectionTitle";
import { StyledAboutMe, StyledAboutSkills } from "./styledComponents";
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
    <StyledAboutMe>
      <SectionTitle title="About Me" />
      <div>
        <img src="https://picsum.photos/400/400" alt="vishal kashi" />
        <div>
          <p>
            Hey there!, my name is Vishal and I like to build cool stuff for web
            and mobile with a focus on design and user experience. At first I
            started coding for android devices but later I also fell in love
            with web development. <br />
            <br />
            Apart from that I also have knowledge about UI/UX design and
            experience working with various design software like Adobe XD,
            Photoshop, Illustrator etc. <br />
            <br />
            Currently my main focus is on learning frontend web development.
            Using React, HTML, CSS and Javascript to create high quality, user
            centered and more accessible products on the web.
            <br />
            <br />
          </p>
          <div>
            <p>Some of my skills and tech I have experience with</p>
            <StyledAboutSkills>{skillsList}</StyledAboutSkills>
          </div>
        </div>
      </div>
    </StyledAboutMe>
  );
};

export default AboutMe;
