import styled from "styled-components";

const SocialLinksStyled = styled.div`
  padding: 1rem 0;
  a {
    color: #fff;
    text-decoration: none;
    top: 0;
    position: relative;
  }

  a:hover {
    color: var(--accent-primary);
    top: -3px;
    transition: top ease 0.25s;
  }

  a + a {
    margin-left: 1rem;
  }
`;

export default SocialLinksStyled;
