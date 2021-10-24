import "./About.css";
import { AboutSkills } from "./AboutSkills";

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
          <p>Some of the technologies I have worked with</p>
          <figure className="about-skills">
            {AboutSkills.map((item, index) => {
              return (
                <div key={index} className={item.cName}>
                  <i class="ri-arrow-right-s-fill">&nbsp;&nbsp;</i>
                  <p>{item.title}</p>
                </div>
              );
            })}
          </figure>
        </div>
      </div>
    </section>
  );
}

export default About;
