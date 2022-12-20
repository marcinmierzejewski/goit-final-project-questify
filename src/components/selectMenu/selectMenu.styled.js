import styled from "styled-components";
import Menu from "@mui/material/Menu";

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

const selectedColorText = (type, item, selectedData) => {
  if (type === "difficulty") {
    if (selectedData.toLowerCase() === item.toLowerCase()) {
      return "#282828";
    }
    return "#B9C3C8";
  }
  if (type === "category") {
    if (selectedData.toLowerCase() === item.toLowerCase()) {
      return "#B9C3C8";
    }
    return "#282828";
  }

  return "#282828";
};

const beforeContent = (type) => {
  if (type === "difficulty") {
    const content = `
    display: block;
    width: 10px;
    height: 10px;
    margin-right: 7px;
    border-radius: 50%;
    content: "";
    )
    `;
    return content;
  }
  return;
};

export const MenuWrapper = styled(Menu)`
  & ul {
    display: grid;
    padding: 9px 21px 10px 12px;
    background: #ffffff;
    box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.05),
      3px 4px 4px rgba(21, 57, 90, 0.05);
    border-radius: 10px;
    row-gap: 5px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.type === "difficulty" ? "14px" : "11px")};
  color: ${(props) =>
    selectedColorText(props.type, props.itemData, props.selectedData)};
  cursor: pointer;
  &::before {
    background-color: ${(props) => difficultyColor(props.itemData)};
    ${(props) => beforeContent(props.type)}
  }
`;
