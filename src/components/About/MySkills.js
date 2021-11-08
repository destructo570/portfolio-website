import { StyledSkillsContainer } from "./styledComponents";

function MySkills(props) {
  return (
    <div>
      <p>Some of my skills and tech I have experience with</p>
      <StyledSkillsContainer>
        {props.skills.map((item, index) => {
          return (
            <div key={index}>
              <i className="ri-arrow-right-s-fill bullet-icon">&nbsp;&nbsp;</i>
              <p>{item.title}</p>
            </div>
          );
        })}
      </StyledSkillsContainer>
    </div>
  );
}

export default MySkills;
