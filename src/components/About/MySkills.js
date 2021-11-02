import "./MySkills.css";

function MySkills(props) {
  return (
    <div className="about-skills">
      <p>Some of my skills and tech I have experience with</p>
      <div className="skills-list">
        {props.skills.map((item, index) => {
          return (
            <div key={index} className={item.cName}>
              <i className="ri-arrow-right-s-fill bullet-icon">&nbsp;&nbsp;</i>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MySkills;
