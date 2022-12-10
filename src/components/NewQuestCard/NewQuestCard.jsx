import React, { useState } from "react";
import { ReactComponent as StarIcon } from "./images/star.svg";
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import {
  Card,
  Category,
  DatetimeBar,
  DifficultyBar,
  DifficultySelect,
  InputWrapper,
  MenuItem,
  MenuStyled,
  MenuCategoryItem,
  CategorySelect,
} from "./NewQuestCard.styled";
import { nanoid } from "@reduxjs/toolkit";

const NewQuestCard = () => {
  // let questDatetime = new Date(props.date + "T" + props.time).getTime();
  const [anchorDifficulty, setAnchorDifficulty] = useState(null);
  const [anchorCategory, setAnchorCategory] = useState(null);
  const [difficult, setDifficult] = useState("Normal");
  const [category, setCategory] = useState("stuff");

  const openDifficultiesMenu = Boolean(anchorDifficulty);
  const openCategoriesMenu = Boolean(anchorCategory);

  const handleOpenDifficultyMenu = (event) => {
    setAnchorDifficulty(event.currentTarget);
  };
  const handleOpenCategoryMenu = (event) => {
    setAnchorCategory(event.currentTarget);
  };
  const handleSelectedDifficulty = (e) => {
    e.currentTarget.innerText === ""
      ? setDifficult(difficult)
      : setDifficult(e.currentTarget.innerText);

    setAnchorDifficulty(null);
  };
  const handleSelectedCategory = (e) => {
    setCategory(e.currentTarget.innerText);

    setAnchorCategory(null);
  };
  const difficulties = ["Easy", "Normal", "Hard"];
  const categories = [
    "stuff",
    "family",
    "health",
    "learning",
    "leisure",
    "work",
  ];
  return (
    <Card>
      <DifficultyBar>
        <DifficultySelect
          onClick={handleOpenDifficultyMenu}
          difficulty={difficult}
        >
          <p>{difficult}</p>
          <ArrowIcon />
        </DifficultySelect>

        <MenuStyled
          id="basic-menu"
          anchorEl={anchorDifficulty}
          open={openDifficultiesMenu}
          onClose={handleSelectedDifficulty}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {difficulties.map((d) => (
            <MenuItem
              key={nanoid()}
              onClick={handleSelectedDifficulty}
              selectedDifficulty={difficult}
              itemDifficulty={d}
            >
              {d}
            </MenuItem>
          ))}
        </MenuStyled>

        <StarIcon />
      </DifficultyBar>

      <InputWrapper>
        <label htmlFor="create-new-quest">CREATE NEW QUEST</label>
        <input id="create-new-quest" type="text" autoFocus required></input>
      </InputWrapper>
      <DatetimeBar>
        <p>
          <span></span>, <span></span>
        </p>
      </DatetimeBar>
      <CategorySelect category={category} onClick={handleOpenCategoryMenu}>
        <Category>{category}</Category>
        <ArrowIcon />
      </CategorySelect>
      <MenuStyled
        id="basic-menu"
        anchorEl={anchorCategory}
        open={openCategoriesMenu}
        onClose={handleSelectedCategory}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categories.map((c) => (
          <MenuCategoryItem
            key={nanoid()}
            onClick={handleSelectedCategory}
            // selectedCategory={category}
            // itemCategory={c}
          >
            {c.toUpperCase()}
          </MenuCategoryItem>
        ))}
      </MenuStyled>
    </Card>
  );
};

export default NewQuestCard;
