import styled from "styled-components";

const NavLinks = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 2.5rem 0;
  top: 2.6rem;
  width: 100%;
  z-index: 100;
  display: ${(props) => (!props.isClicked ? "none" : "block")};

  li {
    list-style: none;
    text-align: center;
  }

  li + li {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: var(--accent-primary);
  }

  @media (min-width: 800px) {
    display: block;
    position: static;
    width: auto;
    padding: 0;

    ul {
      display: flex;
    }

    li + li {
      margin-top: 0;
      margin-left: 1.5rem;
    }
  }
`;

export default NavLinks;
