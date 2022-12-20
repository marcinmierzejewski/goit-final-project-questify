import React, { useState } from "react";
import dayjs from "dayjs";

import { useMenuOperations } from "../../hooks/useMenuOperations";
import { Card } from "./NewQuestCard.styled";
import { useCreateCardMutation } from "../../redux/slices/questifyAPI";
import { separateDate, separateTime } from "../../utils/dateSepareteFunctions";
import { capitalizeFirstLetter } from "../../utils/expressionFunction";
import { difficulties, categories } from "../../utils/appData";
import ConfirmCancelModal from "../ConfirmCancelModal/ConfirmCancelModal";
import SelectMenu from "../SelectMenu/SelectMenu";
import NewCardHeader from "./NewCardHeader";
import NewCardFooter from "./NewCardFooter";
import NewCardInputs from "./NewCardInputs";

const NewQuestCard = ({ onCancel }) => {
  const [dateTimePickerValue, setDateTimePickerValue] = useState(dayjs());
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createCard] = useCreateCardMutation();
  const [isNormalTaskClicked, setIsNormalTaskClicked] = useState(true);

  const checkType = () => {
    if (isNormalTaskClicked) {
      return "Task";
    } else {
      return "Challenge";
    }
  };

  const toggleChallenge = () => {
    setIsNormalTaskClicked(false);
  };

  const toggleNormal = () => {
    setIsNormalTaskClicked(true);
  };

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
      type: checkType(),
    };

    const validPost = (body) => {
      createCard(body);
      setTitle("");
      onCancel();
    };

    title ? validPost(body) : setError("Titile missing");
  };

  const checkTypes = checkType();
  return (
    <>
      {isNormalTaskClicked ? (
        <Card cardType={isNormalTaskClicked}>
          <NewCardHeader
            onClickDif={openDifficultyMenu}
            difficulty={selectedDifficulty}
            onClickChallenge={toggleChallenge}
            cardStateNormal={checkTypes}
          />
          <SelectMenu
            dataType={"difficulty"}
            anchorEl={anchorDifficulty}
            isOpen={isOpenDifficultiesMenu}
            menuItemData={difficulties}
            onClose={selectDifficulty}
            selectedData={selectedDifficulty}
          />
          <NewCardInputs
            titleValue={title}
            onTitleChange={handleOnChange}
            dateTimeValue={dateTimePickerValue}
            onDateTimeChange={setDateTimePickerValue}
            placeholder={error && error}
            cardTypes={isNormalTaskClicked}
          />
          <NewCardFooter
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
      ) : (
        <Card>
          <NewCardHeader
            onClickDif={openDifficultyMenu}
            difficulty={selectedDifficulty}
            onClickNormal={toggleNormal}
            cardStateNormal={checkTypes}
          />
          <SelectMenu
            dataType={"difficulty"}
            anchorEl={anchorDifficulty}
            isOpen={isOpenDifficultiesMenu}
            menuItemData={difficulties}
            onClose={selectDifficulty}
            selectedData={selectedDifficulty}
          />
          <NewCardInputs
            titleValue={title}
            onTitleChange={handleOnChange}
            dateTimeValue={dateTimePickerValue}
            onDateTimeChange={setDateTimePickerValue}
            placeholder={error && error}
            cardTypes={isNormalTaskClicked}
          />
          <NewCardFooter
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
      )}
    </>
  );
};

export default NewQuestCard;
