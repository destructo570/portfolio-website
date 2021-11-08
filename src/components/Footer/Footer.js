import styled from "styled-components";

const FooterSection = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  padding: 1.2rem 0;
  font-family: "Noto Sans Mono", serif;
`;

function Footer() {
  return (
    <FooterSection>
      <p>Designed and built by Vishal Kashi.</p>
    </FooterSection>
  );
}

export default Footer;
