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

const Card = ({_id: id, title, difficulty, category, date, time, type}) => {
  const questDatetime = new Date(`${date}T${time}`).getTime();
  const isTimeout = useTimeout(questDatetime);
  
  const convertedDate = convertDayDisplay(date, type);

  const isChallenge = (type) => type === "Challenge";
  const TypeIcon = isChallenge(type) ? <TrophyIcon /> : <StarIcon />;

  return (
    <CardItem data-id={id} cardType={type}>
      <DifficultyBar difficulty={difficulty}>
        <p>{difficulty}</p>
        {TypeIcon}
      </DifficultyBar>
      {isChallenge(type) && <CardType>{type}</CardType>}
      <h3>{title}</h3>
      <DatetimeBar>
        <p>
          <span>{convertedDate}</span>, <span>{time}</span>
        </p>
        {isTimeout && <FireIcon />}
      </DatetimeBar>
      <Category category={category}>{category}</Category>
    </CardItem>
  );
};

export default Card;
