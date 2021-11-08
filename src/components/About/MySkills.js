import SkillsStyled from "./styles/SkillsStyled";

function MySkills(props) {
  return (
    <div>
      <p>Some of my skills and tech I have experience with</p>
      <SkillsStyled>
        {props.skills.map((item, index) => {
          return (
            <div key={index}>
              <i className="ri-arrow-right-s-fill bullet-icon">&nbsp;&nbsp;</i>
              <p>{item.title}</p>
            </div>
          );
        })}
      </SkillsStyled>
    </div>
  );
}

export default MySkills;
