import { MouseEventHandler } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.color.primaryAccent};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.primaryAccent};
  font-family: "Poppins", serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
  transition: all 0.5s;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.color.primaryText};
    border: 0;
    border-radius: 8px;
    z-index: -2;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.secondaryAccent};
    color: ${({ theme }) => theme.color.primaryText};

    border: 0;
    transition: all 0.3s;
    border-radius: 8px;
    z-index: -1;
  }

  &:hover {
    color: ${({ theme }) => theme.color.primaryText};
    cursor: pointer;
  }

  &:hover::before {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    max-width: 20rem;
  }
`;

const Button: React.FC<{ title: string; onClick: MouseEventHandler }> = (
  props
) => {
  return <StyledButton onClick={props.onClick}>{props.title}</StyledButton>;
};

export default Button;
