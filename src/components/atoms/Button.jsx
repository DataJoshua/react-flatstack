import styled, { css } from "styled-components";

const Button = ({ children, name, handleOnClick, $color }) => {
  const ButtonContainer = styled.button(
    ({ color }) => css`
      padding: 10px 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      background: ${color};

      &:hover {
        cursor: pointer;
      }
    `,
  );

  return (
    <ButtonContainer onClick={handleOnClick} color={$color}>
      {name && <p>{name}</p>}
      {children}
    </ButtonContainer>
  );
};

export default Button;
