import React, { useState } from "react";
import dayjs from "dayjs";
import { useMenuOperations } from "../../hooks/useMenuOperations";
import { Card } from "./EditCard.styled";
import { useEditCardMutation, useDeleteCardMutation } from "../../redux/slices/questifyAPI";
import { separateDate, separateTime } from "../../utils/dateSepareteFunctions";
import { capitalizeFirstLetter } from "../../utils/expressionFunction";
import { difficulties, categories } from "../../utils/appData";
import ConfirmCancelModal from "../ConfirmCancelModal/ConfirmCancelModal";
import SelectMenu from "../selectMenu/selectMenu";
import EditCardHeader from "./EditCardHeader";
import EditCardFooter from "./EditCardFooter";
import EditCardInputs from "./EditCardInputs";

const EditCard = ({
  cardTitle,
  cardDifficulty,
  cardCategory,
  isEdit,
  onCancel,
  cardId,
  cardType,
  cardChallenge
}) => {
  const [dateTimePickerValue, setDateTimePickerValue] = useState(dayjs());
  const [title, setTitle] = useState(cardTitle);
  const [type] = useState(cardType);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCard] = useEditCardMutation();
  const [deleteCart] = useDeleteCardMutation();

  const handleOnChange = (event) => {
    setTitle(event.currentTarget.value);
  };

  const {
    anchorDifficulty,
    anchorCategory,
    selectDifficulty,
    selectCategory,
    isOpenCategoriesMenu,
    isOpenDifficultiesMenu,
    openDifficultyMenu,
    openCategoryMenu,
    selectedCategory,
    selectedDifficulty,
  } = useMenuOperations(cardDifficulty, cardCategory);

  const toggleModal = () => setIsModalOpen((isModalOpen) => !isModalOpen);

  const handlePostEditQuest = () => {
    const time = separateTime(dateTimePickerValue);
    const date = separateDate(dateTimePickerValue);
    const cardCategory = capitalizeFirstLetter(selectedCategory.toLowerCase());
    const cardTitle = capitalizeFirstLetter(title);
    const cardType = capitalizeFirstLetter(type);
    const payload = {
      body: {
        title: cardTitle,
        difficulty: selectedDifficulty,
        category: cardCategory,
        date: date,
        time: time,
        type: cardType,
      },
      id: cardId,
    };
   
    const validPost = (payload) => {
      editCard(payload);
      setTitle("");
      onCancel();
    };

    title ? validPost(payload) : setError("Titile missing");
  };

  return (
    <Card isEdit={isEdit} cardType={cardChallenge}>
      <EditCardHeader
        onClick={openDifficultyMenu}
        difficulty={selectedDifficulty}
      />
      <SelectMenu
        dataType={"difficulty"}
        anchorEl={anchorDifficulty}
        isOpen={isOpenDifficultiesMenu}
        menuItemData={difficulties}
        onClose={selectDifficulty}
        selectedData={selectedDifficulty}
      />
      <EditCardInputs
        action={"Edit"}
        titleValue={title}
        onCancel={onCancel} //
        cardType={cardChallenge} //
        onTitleChange={handleOnChange}
        dateTimeValue={dateTimePickerValue}
        onDateTimeChange={setDateTimePickerValue}
        placeholder={error && error}
      />
      <EditCardFooter
        action={"Edit"}
        category={selectedCategory}
        onClick={openCategoryMenu}
        onClearClick={toggleModal}
        onStartClick={handlePostEditQuest}
      />
      <SelectMenu
        dataType={"category"}
        anchorEl={anchorCategory}
        isOpen={isOpenCategoriesMenu}
        menuItemData={categories}
        onClose={selectCategory}
        selectedData={selectedCategory}
      />
      <ConfirmCancelModal
        isOpen={isModalOpen}
        modalContent={`Delete this ${cardType === "Task" ? "Quest" : cardType}`}
        nameOfConfirm="Delete"
        cancelingModalAction={toggleModal}
        confirmingModalAction={() => deleteCart(cardId)}
      />

    </Card>
  );
};

export default EditCard;
