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

export const CardItem = styled.li`
  height: 201px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 19px 21px 33px 0;
  border-radius: 10px;
  line-height: 1;
  color: #282828;
  position: relative;
  background-color: ${(props) =>
    props.cardType === "Task" ? "#FFF" : "#15395A"};
  box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.03),
    3px 4px 4px rgba(21, 57, 90, 0.03);

  & p {
    letter-spacing: 0.02em;
  }

  & > h3 {
    margin-top: ${(props) => (props.cardType === "Task" ? "69px" : "10px")};
    padding-left: 21px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.cardType === "Challenge" && "#FFF"};
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 21px;

    & > h3 {
      margin-top: ${(props) => (props.cardType === "Task" ? "42px" : "10px")};
      font-size: 16px;
    }
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
    height: ${(props) => (props.type === "Task" ? "18px" : "19px")};
    padding-right: ${(props) => props.type === "Challenge" && "3px"};
  }

  @media screen and (min-width: 768px) {
    & > p {
      font-size: 14px;
    }

    & svg {
      width: 15px;
      height: 15px;
    }
  }
`;

export const CardType = styled.p`
  margin-top: 25px;
  padding-left: 21px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #b9c3c8;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const DatetimeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
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
  margin-top: 47px;
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
  height: 201px;
  background-color: white;
  text-align: center;
  padding-left: 30px
  box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.03),
    3px 4px 4px rgba(21, 57, 90, 0.03);
  border-radius: 10px;

  & p {
    padding-top: 18px;
      padding-bottom: 10px;
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 11px;
text-transform: uppercase;
color: #000000;
  }

  & span {
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 12px;
text-decoration-line: underline;
color: #00D7FF;
  }
`;

export const ContinueBox = styled.div`
cursor: pointer;
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 74px;
  bottom: 3px;
  position: absolute;

  & svg {
    position: absolute;
    bottom: 14px;
    left: 65px;
  }
`;

