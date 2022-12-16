import React, { useState } from "react";
import dayjs from "dayjs";
import { useMenuOperations } from "../../hooks/useMenuOperations";
import { Card } from "./EditCard.styled";
import { useCreateCardMutation } from "../../redux/slices/questifyAPI";
import { separateDate, separateTime } from "../../utils/dateSepareteFunctions";
import { capitalizeFirstLetter } from "../../utils/expressionFunction";
import { difficulties, categories } from "../../utils/appData";
import ConfirmCancelModal from "../ConfirmCancelModal/ConfirmCancelModal";
import SelectMenu from "../selectMenu/selectMenu";
import EditCardHeader from "./EditCardHeader";
import EditCardFooter from "./EditCardFooter";
import EditCardInputs from "./EditCardInputs";

const EditQuestCard = ({ onCancel }) => {
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
      createCard(body);
      setTitle("");
      onCancel();
    };

    title ? validPost(body) : setError("Titile missing");
  };

  return (
    <Card>
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
        titleValue={title}
        onTitleChange={handleOnChange}
        dateTimeValue={dateTimePickerValue}
        onDateTimeChange={setDateTimePickerValue}
        placeholder={error && error}
      />
      <EditCardFooter
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
        modalContent="Are you sure you want to abort creating a new card?"
        nameOfConfirm="Yes"
        cancelingModalAction={toggleModal}
        confirmingModalAction={onCancel}
      />
    </Card>
  );
};

export default EditQuestCard;
