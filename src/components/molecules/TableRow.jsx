import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "../atoms/Button";

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Text = styled.h1`
  font-weight: bold;
  color: #fff;
`;

const Col = styled.td`
  padding: 20px;
  text-align: center;
`;

const TableRow = ({ title, description, createdAt, primary }) => {
  const Container = styled.tr(
    ({ color }) => css`
      background: ${color};
      width: 100%;
    `,
  );

  return (
    <Container color={primary ? "#25415A" : "#2F5373"}>
      <Col>
        <Text>{title}</Text>
      </Col>
      <Col>
        <Text>{description}</Text>
      </Col>
      <Col>
        <Text>{createdAt}</Text>
      </Col>
      <Col>
        <Button $color="#148AF1">
          <LinkStyled to="/projects/tasks">Tasks</LinkStyled>
        </Button>
      </Col>
      <Col>
        <Button $color="#29A64F">
          <LinkStyled to="/projects/1/edit">Edit</LinkStyled>
        </Button>
      </Col>
      <Col>
        <Button $color="#AF3B3B">
          <LinkStyled to="/projects/1">Destroy</LinkStyled>
        </Button>
      </Col>
    </Container>
  );
};

export default TableRow;
