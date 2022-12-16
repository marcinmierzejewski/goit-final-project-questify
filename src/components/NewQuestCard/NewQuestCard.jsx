import React, { useState } from "react";
import dayjs from "dayjs";
import { useMenuOperations } from "../../hooks/useMenuOperations";
import { Card } from "./NewQuestCard.styled";
import { useCreateCardMutation } from "../../redux/slices/questifyAPI";
import { separateDate, separateTime } from "../../utils/dateSepareteFunctions";
import { capitalizeFirstLetter } from "../../utils/expressionFunction";
import { difficulties, categories } from "../../utils/appData";
import ConfirmCancelModal from "../ConfirmCancelModal/ConfirmCancelModal";
import SelectMenu from "../selectMenu/selectMenu";
import CardHeader from "../CardTemplate/CardHeader";
import CardFooter from "../CardTemplate/CardFooter";
import CardInputs from "../CardTemplate/CardInputs";

const NewQuestCard = ({ onCancel }) => {
  const [dateTimePickerValue, setDateTimePickerValue] = useState(dayjs());
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createCard] = useCreateCardMutation();

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
  } = useMenuOperations();

  const toggleModal = () => setIsModalOpen((isModalOpen) => !isModalOpen);

  const handlePostNewQuest = () => {
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
      createCard(body);
      setTitle("");
      onCancel();
    };

    title ? validPost(body) : setError("Titile missing");
  };

  return (
    <Card>
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
        action={"Create new Quest"}
        titleValue={title}
        onTitleChange={handleOnChange}
        dateTimeValue={dateTimePickerValue}
        onDateTimeChange={setDateTimePickerValue}
        placeholder={error && error}
      />
      <CardFooter
        action={"Create new Quest"}
        category={selectedCategory}
        onClick={openCategoryMenu}
        onClearClick={toggleModal}
        onStartClick={handlePostNewQuest}
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
        modalContent="Are you sure you want to abort creating a new card?"
        nameOfConfirm="Yes"
        cancelingModalAction={toggleModal}
        confirmingModalAction={onCancel}
      />
    </Card>
  );
};

export default NewQuestCard;
