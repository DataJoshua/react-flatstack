import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
`;

const Footer = () => {
  return (
    <Container>
      <p>&#64; 2023 Joshua rodriguez</p>
    </Container>
  );
};

export default Footer;
