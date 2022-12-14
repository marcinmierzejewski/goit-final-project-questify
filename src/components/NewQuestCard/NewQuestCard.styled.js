import styled from "styled-components";
import Menu from "@mui/material/Menu";
import { ReactComponent as ClearIcon } from "./images/clear.svg";

const difficultyColor = (difficulty) => {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "#00D7FF";

    case "normal":
      return "#24D40C";

    case "hard":
      return "#DB0837";

    default:
      return "transparent";
  }
};

const selectedColorText = (difficulty, selectedDifficulty) => {
  if (difficulty.toLowerCase() === selectedDifficulty.toLowerCase()) {
    return "#282828";
  }
  return "#B9C3C8";
};
const categoryBgColor = (category) => {
  switch (category.toUpperCase()) {
    case "WORK":
      return "#D3F6CE";

    case "FAMILY":
      return "#FFE6D3";

    case "HEALTH":
      return "#CDF7FF";

    case "LEARNING":
      return "#FFF6C0";

    case "LEISURE":
      return "#F8D2FF";

    case "STUFF":
      return "#B9C3C8";

    default:
      return "transparent";
  }
};

export const InputWrapper = styled.div`
  margin-left: 21px;
  text-align: center;
  margin-bottom: 8px;
  & label {
    width: 128px;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #b9c3c8;
  }
  & input {
    margin: 0;
    width: 100%;
    border: none;
    border-bottom: 2px solid #00d7ff;
    outline: transparent;
    padding: 2px 4px;
    caret-color: #00d7ff;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #282828;
  }
`;

export const Card = styled.li`
  position: relative;
  padding: 18px 21px 33px 0;
  border-radius: 10px;
  line-height: 1;
  color: #282828;
  background-color: #fff;
  box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.03),
    3px 4px 4px rgba(21, 57, 90, 0.03);

  & p {
    letter-spacing: 0.02em;
  }

  & > h3 {
    margin-top: 69px;
    padding-left: 21px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 21px;

    & > h3 {
      margin-top: 42px;
      font-size: 16px;
    }
  }
`;

export const DifficultyBar = styled.div`
  padding-left: 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
  & svg {
    width: 19px;
    height: 19px;
  }

  @media screen and (min-width: 768px) {
    & svg {
      width: 15px;
      height: 15px;
    }
  }
`;

export const DifficultySelect = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #b9c3c8;
  cursor: pointer;
  & > p {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #b9c3c8;
    &::before {
      display: block;
      width: 10px;
      height: 10px;
      margin-right: 7px;
      border-radius: 50%;
      content: "";
      background-color: ${(props) => difficultyColor(props.difficulty)};
    }
  }

  & svg {
    margin-left: 7px;
    width: 8px;
    height: 4px;
  }

  @media screen and (min-width: 768px) {
    & > p {
      font-size: 14px;
    }
  }
`;

export const DatetimeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 36px;
  padding-left: 21px;

  & input {
    width: 120px;
    border: none;
    outline: none;
    padding: 0;
    font-size: 14px;
    color: #282828;
    text-align: center;
    &::placeholder {
      color: #282828;
    }
  }
  & fieldset {
    border: none;
    outline: transparent;
  }
  & button {
    padding: 0;
  }
  & svg {
    width: 12px;
    height: 14px;
    fill: #00d7ff;
  }
`;

export const CategorySelect = styled.div`
  display: flex;
  align-items: center;
  max-width: ${(props) => (props.category === "LEARNING" ? "130px" : "120px")};
  width: 100%;
  padding: 10px 0 11px 21px;
  border-radius: 0px 25px 25px 0px;
  font-size: 14px;
  text-transform: uppercase;
  background-color: ${(props) => categoryBgColor(props.category)};
  cursor: pointer;

  & svg {
    margin-left: 7px;
    width: 8px;
    height: 4px;
  }

  @media screen and (min-width: 768px) {
    max-width: ${(props) => (props.category === "LEARNING" ? "100px" : "88px")};
    padding: 8px 0 6px 21px;
    border-radius: 0px 15px 15px 0px;
    font-size: 11px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 14px;
  color: ${(props) =>
    selectedColorText(props.itemDifficulty, props.selectedDifficulty)};
  cursor: pointer;
  &::before {
    display: block;
    width: 10px;
    height: 10px;
    margin-right: 7px;
    border-radius: 50%;
    content: "";
    background-color: ${(props) => difficultyColor(props.itemDifficulty)};
  }
`;
export const MenuCategoryItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 11px;
  line-height: 1;
  color: ${(props) =>
    props.category.toLowerCase() === props.selectedCategory.toLowerCase()
      ? "#B9C3C8"
      : "#282828"};
  cursor: pointer;
`;

export const MenuStyled = styled(Menu)`
  & .css-6hp17o-MuiList-root-MuiMenu-list {
    display: grid;
    padding: 9px 21px 10px 12px;
    background: #ffffff;
    box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.05),
      3px 4px 4px rgba(21, 57, 90, 0.05);
    border-radius: 10px;
    row-gap: 5px;
  }
`;
export const FooterCardBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 7px;
  }
`;

export const StartSpan = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: #00d7ff;
  cursor: pointer;
`;
export const ClearIconWrapper = styled(ClearIcon)`
  cursor: pointer;
`;
