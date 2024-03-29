import styled from "styled-components";
import Button from "../atoms/Button";

const TableStyled = styled.table`
  background: #1e3549;
  width: 100%;
`;

const TableHeader = styled.th`
  padding: 10px 20px;
  color: #fff;
  font-size: 1.2rem;
`;

const Header = styled.div`
  background: #ccc;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.4rem;
`;

const Table = ({ children, title }) => {
  const handleOnClick = () => {
    alert("not yet supported lol )");
  };

  return (
    <>
      <Header>
        <Title>{title}</Title>
        <Button name="New Project" $color="#148AF1" handleOnClick={handleOnClick} />
      </Header>
      <TableStyled>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Created at</TableHeader>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TableStyled>
    </>
  );
};

export default Table;
