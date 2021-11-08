import styled from "styled-components";

const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;

  img {
    border-radius: 8px;
    filter: grayscale(1);
    transition: filter 0.6s;
  }

  img:hover {
    filter: grayscale(0);
    transition: filter 0.6s;
  }

  @media (min-width: 800px) {
    min-width: 40%;
    align-self: flex-start;
    padding: 0 2.5rem;
  }
`;

export default AboutImage;
