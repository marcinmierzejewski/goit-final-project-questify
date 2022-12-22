import { useState } from "react";

export const useMenuOperations = (difficulty="Normal", category="Stuff") => {
  const [anchorDifficulty, setAnchorDifficulty] = useState(null);
  const [anchorCategory, setAnchorCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);
  const [selectedCategory, setSelectedCategory] = useState(category);

  const isOpenDifficultiesMenu = Boolean(anchorDifficulty);
  const isOpenCategoriesMenu = Boolean(anchorCategory);

  const openDifficultyMenu = (event) =>
    setAnchorDifficulty(event.currentTarget);

  const openCategoryMenu = (event) => setAnchorCategory(event.currentTarget);

  const selectDifficulty = (event) => {
    event.currentTarget.innerText === ""
      ? setSelectedDifficulty(selectedDifficulty)
      : setSelectedDifficulty(event.currentTarget.innerText);

    setAnchorDifficulty(null);
  };

  const selectCategory = (event) => {
    event.currentTarget.innerText === ""
      ? setSelectedCategory(selectedCategory)
      : setSelectedCategory(event.currentTarget.innerText);

    setAnchorCategory(null);
  };
  return {
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
  };
};
