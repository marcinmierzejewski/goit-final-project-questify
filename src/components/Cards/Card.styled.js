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

    default:
      return "#B9C3C8";
  }
};

export const CardContainer = styled.li`
  position: relative;
  height: 260px;
  width: 290px;
  @media screen and (min-width: 768px) {
    height: 199px;
    width: 205px;
  }
`;

export const CardItem = styled.div`
  box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.03),
    3px 4px 4px rgba(21, 57, 90, 0.03);
  border-radius: 10px;
  background-color: ${(props) =>
    props.cardType === "Task" ? "#FFF" : "#15395A"};
  height: 260px;
  width: 100%;
  padding: 19px 21px 33px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1;
  color: #282828;
  position: relative;

  @media screen and (min-width: 768px) {
    height: 199px;
    padding-bottom: 21px;
  }

  & p {
    letter-spacing: 0.02em;
  }

  & svg {
    cursor: pointer;
  }
`;

export const DifficultyBar = styled.div`
  padding-left: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
      background-color: ${(props) => difficultyColor(props.difficulty)};
      content: "";
    }
  }

  & svg {
    width: 19px;
    height: ${(props) => (props.cardType === "Task" ? "18px" : "19px")};
    margin-right: ${(props) => props.cardType === "Challenge" && "0px"};

    &:hover {
      filter: ${(props) =>
        props.cardType === "Task"
          ? "drop-shadow(0px 3px 4px rgba(0, 215, 255, 0.25))"
          : "drop-shadow(0px 4px 4px rgba(0, 215, 255, 0.25))"};
    }
  }

  @media screen and (min-width: 768px) {
    & > p {
      font-size: 14px;
    }

    & svg {
      width: ${(props) => (props.cardType === "Task" ? "15px" : "14px")};
      height: ${(props) => (props.cardType === "Task" ? "15px" : "14px")};
    }
  }
`;

export const TitleDataWrapper = styled.div`
  & h3 {
    padding-left: 21px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    margin-bottom: ${(props) =>
      props.cardType === "Challenge" ? "10px" : "12px"};
    color: ${(props) => props.cardType === "Challenge" && "#FFF"};
  }

  @media screen and (min-width: 768px) {
    & > h3 {
      font-size: 16px;
    }
  }
`;

export const CardType = styled.p`
  margin-bottom: 10px;
  padding-left: 21px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  font-size: 700;
  color: #b9c3c8;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const DatetimeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 21px;

  & > p {
    display: inline-block;
    margin-right: 7px;
    font-size: 18px;
    color: #b9c3c8;
  }

  @media screen and (min-width: 768px) {
    & > p {
      margin-right: 5px;
      font-size: 14px;
    }
  }
`;

export const Category = styled.p`
  max-width: 120px;
  width: 100%;
  /* margin-top: 47px; */
  padding: 10px 0 11px 21px;
  border-radius: 0px 25px 25px 0px;
  font-size: 14px;
  text-transform: uppercase;
  background-color: ${(props) => categoryBgColor(props.category)};

  @media screen and (min-width: 768px) {
    max-width: 88px;
    padding: 8px 0 6px 21px;
    border-radius: 0px 15px 15px 0px;
    font-size: 11px;
  }
`;

//FLIPED CARD CSS

export const FlippedCard = styled.div`
  width: 100%;
  height: 260px;
  padding: 20px 17px 0;
  background-color: white;
  text-align: center;
  box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.03),
    3px 4px 4px rgba(21, 57, 90, 0.03);
  border-radius: 10px;

  & p {
    margin-bottom: 10px;
    font-style: normal;
    font-size: 16px;
    text-transform: uppercase;
    color: #000000;
  }
  & svg {
    margin-bottom: 7px;
    width: 200px;
    height: 165px;
  }
  & span {
    font-style: normal;

    font-size: 16px;
    text-decoration-line: underline;
    text-transform: none;
    color: #00d7ff;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    height: 199px;
    & p {
      font-size: 11px;
    }
    & span {
      font-size: 12px;
    }
    & svg {
      width: 144px;
      height: 124px;
    }
  }
`;

export const ContinueBox = styled.div`
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    margin-bottom: 0;
    margin-right: 7px;
    color: #b9c3c8;
  }
  & svg {
    margin-bottom: 0;
    width: 10px;
    height: 10px;
  }
  @media screen and (min-width: 768px) {
    & svg {
      width: 7px;
      height: 5px;
    }
  }
`;
