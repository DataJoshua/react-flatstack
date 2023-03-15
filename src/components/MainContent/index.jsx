import styled from "styled-components";
import Image from "../Image";

const URL_1 = `https://static.casagangotena.com/wp-content/uploads/2021/02/quito-landscape-clear-day-volcanoe.jpg`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin: 20px 0px;
  font-weight: bold;
`;

const MainContent = () => {
  return (
    <Container>
      <Title>My city Quito, Ecuador</Title>
      <Image url={URL_1} />
    </Container>
  );
};

export default MainContent;
