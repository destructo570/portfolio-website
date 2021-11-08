import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;

  h3 {
    color: var(--accent-primary);
  }

  h1 {
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 600;
    margin-top: 0.5rem;
    color: white;
  }

  h1 + h1 {
    color: ${({ theme }) => theme.colors.subTitle};
  }

  p {
    margin: 1rem 0;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row-reverse;

    p {
      max-width: 60%;
    }

    div {
      width: 100%;
    }
  }
`;

export const StyledSocialLinks = styled.div`
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
