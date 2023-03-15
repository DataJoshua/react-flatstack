import styled, { css } from "styled-components";

const ButtonContainer = styled.button(
  ({ color }) => css`
    padding: 10px 20px;
    outline: none;
    border-radius: 10px;
    border: 1px solid #ccc;
    background: ${color};
  `,
);

const Button = ({ name, handleOnClick }) => {
  return (
    <ButtonContainer onClick={handleOnClick}>
      <p>{name}</p>
    </ButtonContainer>
  );
};

export default Button;
