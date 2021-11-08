import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 2rem;
  width: 100%;
  background-color: transparent;
  color: var(--accent-primary);
  border-radius: 8px;
  border: 1px solid var(--accent-primary);
  font-family: "Poppins", serif;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
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
    color: var(--text-primary);
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
    background-color: var(--accent-secondary);
    color: var(--text-primary);

    border: 0;
    transition: all 0.3s;
    border-radius: 8px;
    z-index: -1;
  }

  &:hover {
    color: var(--text-primary);
    cursor: pointer;
  }

  &:hover::before {
    width: 100%;
  }

  @media (min-width: 800px) {
    max-width: 20rem;
  }
`;

export default Button;
