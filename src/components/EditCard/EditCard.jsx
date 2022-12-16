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
import CardHeader from "../CardTemplate/CardHeader";
import CardFooter from "../CardTemplate/CardFooter";
import CardInputs from "../CardTemplate/CardInputs";

const EditCard = ({ 
  cardTitle,
  cardDifficulty,
  cardCategory,
  isEdit,
  onCancel,
  cardId,
  cardType,
}) => {
  
  const [dateTimePickerValue, setDateTimePickerValue] = useState(dayjs());
  const [title, setTitle] = useState(cardTitle);
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
    const body = {
      title: cardTitle,
      difficulty: selectedDifficulty,
      category: cardCategory,
      date: date,
      time: time,
      type: "Task",
    };

    const validPost = (body) => {
      editCard(cardId, body);
      setTitle("");
      onCancel();
    };

    title ? validPost(body) : setError("Titile missing");
  };

  return (
    <Card isEdit={isEdit}>
      <CardHeader
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
      <CardInputs
        action={"Edit"}
        titleValue={title}
        onCancel={onCancel} //
        cardType={cardType} //
        onTitleChange={handleOnChange}
        dateTimeValue={dateTimePickerValue}
        onDateTimeChange={setDateTimePickerValue}
        placeholder={error && error}
      />
      <CardFooter
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
