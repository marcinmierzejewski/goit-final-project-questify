import React from "react";
import { useTimeout } from "../../hooks/useTimeout";
import { ReactComponent as StarIcon } from "./images/star.svg";
import { ReactComponent as FireIcon } from "./images/fire.svg";
import { Card, Category, DatetimeBar, DifficultyBar } from "./QuestCard.styled";
import { currentDate, tomorrowDate } from "../../utils/datetime";

const QuestCard = (props) => {
  const questDatetime = new Date(props.date + "T" + props.time).getTime();
  const isTimeout = useTimeout(questDatetime);

  const date = ((date) => {
    switch (date) {
      case currentDate:
        return "Today";
      
      case tomorrowDate:
        return "Tomorrow";

      default:
        return date;
    }
  })(props.date);

  return (
    <Card id={props.id}>
      <DifficultyBar difficulty={props.difficulty}>
        <p>{props.difficulty}</p>
        <StarIcon />
      </DifficultyBar>
      <h3>{props.title}</h3>
      <DatetimeBar>
        <p>
          <span>{date}</span>, <span>{props.time}</span>
        </p>
        {isTimeout && <FireIcon />}
      </DatetimeBar>
      <Category category={props.category}>{props.category}</Category>
    </Card>
  );
};

export default QuestCard;
