import { CardModalWrapper, Modal } from "./ConfirmCancelModal.styled";

const ConfirmCancelModal = ({
  isOpen,
  modalContent,
  cancelingModalAction,
  confirmingModalAction,
  nameOfConfirm
}) => {
  return (
    <CardModalWrapper isOpen={isOpen}>
      <Modal>
        <p>{modalContent}</p>
        <div>
          <button onClick={cancelingModalAction} type="button">
            cancel
          </button>
          |
          <button onClick={confirmingModalAction} type="button">
            {nameOfConfirm}
          </button>
        </div>
      </Modal>
    </CardModalWrapper>
  );
};

export default ConfirmCancelModal;
