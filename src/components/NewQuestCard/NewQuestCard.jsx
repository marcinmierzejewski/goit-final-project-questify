import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ReactComponent as StarIcon } from "./images/star.svg";
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import { ReactComponent as ClearIcon } from "./images/clear.svg";
import { ReactComponent as LineIcon } from "./images/Line.svg";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import {
  Card,
  DifficultyBar,
  DifficultySelect,
  InputWrapper,
  MenuItem,
  MenuStyled,
  MenuCategoryItem,
  CategorySelect,
  DatetimeBar,
  FooterCardBar,
  StartWrapper,
} from "./NewQuestCard.styled";
import { nanoid } from "@reduxjs/toolkit";
import { useCreateCardMutation } from "../../redux/slices/questifyAPI";

const NewQuestCard = () => {
  const [dateTimePickerValue, setDateTimePickerValue] = useState("");
  const [anchorDifficulty, setAnchorDifficulty] = useState(null);
  const [anchorCategory, setAnchorCategory] = useState(null);
  const [difficult, setDifficult] = useState("Normal");
  const [category, setCategory] = useState("stuff");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const openDifficultiesMenu = Boolean(anchorDifficulty);
  const openCategoriesMenu = Boolean(anchorCategory);

  const handleOpenDifficultyMenu = (event) => {
    setAnchorDifficulty(event.currentTarget);
  };
  const handleOpenCategoryMenu = (event) => {
    setAnchorCategory(event.currentTarget);
  };
  const handleOnChange = (event) => {
    setTitle(event.currentTarget.value);
    console.log(title);
  };
  const handleSelectedDifficulty = (e) => {
    e.currentTarget.innerText === ""
      ? setDifficult(difficult)
      : setDifficult(e.currentTarget.innerText);

    setAnchorDifficulty(null);
  };
  const handleSelectedCategory = (e) => {
    e.currentTarget.innerText === ""
      ? setCategory(category)
      : setCategory(e.currentTarget.innerText);

    setAnchorCategory(null);
  };
  console.log(dateTimePickerValue);
  const handelPostNewQuest = () => {
    const body = {
      title: title,
      difficulty: difficult,
      category: category,
      date: dateTimePickerValue,
      time: dateTimePickerValue,
      type: "Task",
    };
    title ? useCreateCardMutation(body) : setError("Titile missing");
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
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
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
        <input
          id="create-new-quest"
          type="text"
          autoFocus
          required
          onChange={handleOnChange}
        ></input>
      </InputWrapper>
      <DatetimeBar>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            onChange={(newValue) => {
              setDateTimePickerValue(newValue);
            }}
            onError={console.log}
            ampm={false}
            minDateTime={dayjs()}
            inputFormat="YYYY-MM-DD HH:mm"
            mask="____-__-__ __:__"
            components={{
              OpenPickerIcon: DateRangeIcon,
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Today" />
            )}
          />
        </LocalizationProvider>
      </DatetimeBar>
      <FooterCardBar>
        <CategorySelect category={category} onClick={handleOpenCategoryMenu}>
          <p>{category}</p>
          <ArrowIcon />
        </CategorySelect>
        <StartWrapper>
          <ClearIcon />
          <LineIcon />
          <span onClick={handelPostNewQuest}>START</span>
        </StartWrapper>
        <MenuStyled
          id="demo-positioned-menu"
          anchorEl={anchorCategory}
          open={openCategoriesMenu}
          onClose={handleSelectedCategory}
          aria-labelledby="demo-positioned-button"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
        >
          {categories.map((c) => (
            <MenuCategoryItem
              key={nanoid()}
              onClick={handleSelectedCategory}
              category={category}
              selectedCategory={c}
            >
              {c.toUpperCase()}
            </MenuCategoryItem>
          ))}
        </MenuStyled>
      </FooterCardBar>
      {error && <p>{error}</p>}
    </Card>
  );
};

export default NewQuestCard;
