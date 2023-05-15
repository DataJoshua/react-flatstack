import styled, { css } from "styled-components";

const Button = ({ children, name, handleOnClick, isDisabled, $color, isHidden }) => {
  const ButtonContainer = styled.button(
    ({ color }) => css`
      padding: 10px 20px;
      outline: none;
      border-radius: 10px;
      border: none;
      background: ${color};
      cursor: pointer;
      ${isHidden ? "display: none" : ""}
    `,
  );

  return (
    <ButtonContainer onClick={handleOnClick} color={$color} disabled={isDisabled}>
      {name && <p>{name}</p>}
      {children}
    </ButtonContainer>
  );
};

export default Button;
