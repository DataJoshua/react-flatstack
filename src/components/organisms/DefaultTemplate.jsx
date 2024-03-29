import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  padding: 20px;
`;

const DefaultTemplate = ({ children, title }) => {
  return (
    <>
      <Header projectName={title} />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default DefaultTemplate;
