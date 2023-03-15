import styled from "styled-components";
import Button from "../atoms/Button";

const Container = styled.main`
  height: 100vh;
  background-color: #ccc;
`;

const MainContent = () => {
  const handleOnClick = () => {
    alert("clicked");
  };

  return (
    <Container>
      <p>sample</p>
      <Button name="click" handleOnClick={handleOnClick} color="#fab" />
    </Container>
  );
};

export default MainContent;
