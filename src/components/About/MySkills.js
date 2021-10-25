import "./MySkills.css";

function MySkills(props) {
  return (
    <div className="about-skills">
      <p>Some of the technologies I have worked with</p>
      <div className="skills-list">
        {props.skills.map((item, index) => {
          return (
            <div key={index} className={item.cName}>
              <i class="ri-arrow-right-s-fill">&nbsp;&nbsp;</i>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MySkills;
