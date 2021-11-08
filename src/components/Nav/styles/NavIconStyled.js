import styled from "styled-components";

const NavIconStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }

  /* Media Queries */

  @media (min-width: 800px) {
    display: none;
  }
`;

export default NavIconStyled;
