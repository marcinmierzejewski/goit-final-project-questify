import { CardModalWrapper, Modal } from "./ConfirmCancelModal.styled";

const ConfirmCancelModal = ({
  isOpen,
  modalContent,
  buttonConfirmAction,
  buttonCancelAction,
  nameOfConfirm
}) => {
  return (
    <CardModalWrapper isOpen={isOpen}>
      <Modal>
        <p>{modalContent}</p>
        <div>
          <button onClick={buttonCancelAction} type="button">
            cancel
          </button>
          |
          <button onClick={buttonConfirmAction} type="button">
            {nameOfConfirm}
          </button>
        </div>
      </Modal>
    </CardModalWrapper>
  );
};

export default ConfirmCancelModal;
