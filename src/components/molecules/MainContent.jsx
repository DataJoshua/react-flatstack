import styled from "styled-components";
import Button from "../atoms/Button";

const Container = styled.main`
  height: calc(100vh - 152px);
  background-color: #ccc;
`;

const MainContent = () => {
  const handleOnClick = () => {
    alert("clicked");
  };

  return (
    <Container>
      <p>sample</p>
      <Button name="click" handleOnClick={handleOnClick} isDisabled />
    </Container>
  );
};

export default MainContent;
