import "./About.css";
import { SkillList } from "./SkillList";
import MySkills from "./MySkills";

function About() {
  return (
    <section className="about">
      <h1 className="about__title">About Me</h1>
      <div className="about__content">
        <div className="about-img">
          <i className="ri-user-4-line ri-3x"></i>
        </div>
        <div>
          <p className="about-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <br />
          <MySkills skills={SkillList} />
        </div>
      </div>
    </section>
  );
}

export default About;
