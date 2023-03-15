import styled from "styled-components";

const Nav = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  background-color: #327dbf;
  padding: 20px 40px;
`;

const Header = ({ projectName }) => {
  return (
    <Nav>
      <h1>{projectName}</h1>
      <h2>Logo</h2>
    </Nav>
  );
};

export default Header;
