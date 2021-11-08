import { SkillList } from "./SkillList";
import MySkills from "./MySkills";
import AboutStyled from "./styles/AboutStyled";
import AboutImage from "./styles/AboutImage";
import TextHighlight from "../UI/styles/TextHighlight";
import AboutContent from "./styles/AboutContent";
import AboutBody from "./styles/AboutBody";

function About() {
  return (
    <AboutStyled id="about">
      <div>
        <h1>About Me</h1>
        <TextHighlight />
      </div>
      <AboutContent>
        <AboutImage>
          <img src="https://picsum.photos/300/300" alt=""></img>
        </AboutImage>
        <AboutBody>
          <p>
            Hey there!, my name is Vishal and I like to build cool stuff for web
            and mobile with a focus on design and user experience. At first I
            started coding for android devices but later I also fell in love
            with web development.
            <br />
            <br />
            Apart from that I also have knowledge about UI/UX design and
            experience working with various design software like Adobe XD,
            Photoshop, Illustrator etc.
            <br />
            <br />
            Currently my main focus is on learning frontend web development.
            Using React, HTML, CSS and Javascript to create high quality, user
            centered and more accessible products on the web.
          </p>
          <br />
          <MySkills skills={SkillList} />
        </AboutBody>
      </AboutContent>
    </AboutStyled>
  );
}

export default About;
