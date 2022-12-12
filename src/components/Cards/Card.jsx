import React from "react";
import { useTimeout } from "../../hooks/useTimeout";
import { convertDayDisplay } from "../../utils/convertDayDisplay";
import { ReactComponent as FireIcon } from "./images/fire.svg";
import { ReactComponent as StarIcon } from "./images/star.svg";
import { ReactComponent as TrophyIcon } from "./images/trophy.svg";
import {
  CardItem,
  CardType,
  Category,
  DatetimeBar,
  DifficultyBar,
} from "./Card.styled";

const Card = (props) => {
  const questDatetime = new Date(props.date + "T" + props.time).getTime();
  const isTimeout = useTimeout(questDatetime);

  const date = convertDayDisplay(props.date, props.type);
  

  const iconType = (() => {
    if (props.type === "Challenge") {
      return <TrophyIcon />;
    }
    return <StarIcon />;
  })(props.type);

  return (
    <CardItem data-id={props.id} cardType={props.type}>
      <DifficultyBar difficulty={props.difficulty}>
        <p>{props.difficulty}</p>
        {iconType}
      </DifficultyBar>
      {props.type === "Challenge" && <CardType>{props.type}</CardType>}
      <h3>{props.title}</h3>
      <DatetimeBar>
        <p>
          <span>{date}</span>, <span>{props.time}</span>
        </p>
        {isTimeout && <FireIcon />}
      </DatetimeBar>
      <Category category={props.category}>{props.category}</Category>
    </CardItem>
  );
};

export default Card;
