import { CardDeleteWrapper, DeleteMenu } from "./CardDelete.styled";
import { useDeleteCardMutation } from "../../redux/slices/questifyAPI";

const CardDelete = ({ cardType, cardId, isOpen, func }) => {
  const [deleteCart] = useDeleteCardMutation();

  return (
    <CardDeleteWrapper isOpen={isOpen}>
      <DeleteMenu>
        <p>Delete this {cardType === "Task" ? "Quest" : cardType}?</p>
        <div>
          <button onClick={func} type="button">
            cancel
          </button>
          |
          <button onClick={() => deleteCart(cardId)} type="button">
            delete
          </button>
        </div>
      </DeleteMenu>
    </CardDeleteWrapper>
  );
};

export default CardDelete;
