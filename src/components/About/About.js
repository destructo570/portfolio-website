import "./About.css";
import { SkillList } from "./SkillList";
import MySkills from "./MySkills";

function About() {
  return (
    <section id="about">
      <div>
        <h1 className="about__title semi--bold">About Me</h1>
        <div className="sec-divider"></div>
      </div>
      <div className="about__content">
        <div className="content-img">
          <img src="https://picsum.photos/300/300" alt=""></img>
        </div>
        <div className="content-body">
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
        </div>
      </div>
    </section>
  );
}

export default About;
