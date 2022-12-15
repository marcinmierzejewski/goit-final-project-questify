import styled from "styled-components";





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
