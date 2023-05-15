import styled from "styled-components";
import Button from "../atoms/Button";

const ModalContainer = styled.div``;

const ModalTitle = styled.h1`
  font-size: 1.3rem;
  text-align: center;
  padding: 20px 0px;
`;

const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  gap: 30px;
`;

const ButtonText = styled.h3`
  color: white;
`;

const ModalContent = ({ onCancel, onConfirm }) => {
  return (
    <ModalContainer>
      <ModalTitle> Are you sure you want to delete this task ? </ModalTitle>
      <ModalButtonsContainer>
        <Button handleOnClick={onConfirm} $color="#148AF1">
          <ButtonText>OK</ButtonText>
        </Button>
        <Button handleOnClick={onCancel} $color="#AF3B3B">
          <ButtonText>NO</ButtonText>
        </Button>
      </ModalButtonsContainer>
    </ModalContainer>
  );
};

export default ModalContent;
