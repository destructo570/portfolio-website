import React from "react";
import styled from "styled-components";

const StyledSectionTitle = styled.div`
  padding-bottom: 2em;
  h2 {
    font-weight: 600;
  }
`;
const StyledDivider = styled.div`
  width: 50px;
  height: 6px;
  margin-top: 0.2em;
  background-color: ${({ theme }) => theme.color.primaryAccent};
`;

const SectionTitle: React.FC<{ title: string }> = (props) => {
  return (
    <StyledSectionTitle>
      <h2>{props.title}</h2>
      <StyledDivider />
    </StyledSectionTitle>
  );
};

export default SectionTitle;
