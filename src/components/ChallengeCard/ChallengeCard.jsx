import React from "react";
import { useTimeout } from "../../hooks/useTimeout";
import { ReactComponent as StarIcon } from "./images/star.svg";
import { ReactComponent as FireIcon } from "./images/fire.svg";
import { Card, Category, DatetimeBar, DifficultyBar } from "./QuestCard.styled";

const QuestCard = (props) => {
  let questDatetime = new Date(props.date + "T" + props.time).getTime();
  const isTimeout = useTimeout(questDatetime);

  return (
    <Card id={props.id}>
      <DifficultyBar difficulty={props.difficulty}>
        <p>{props.difficulty}</p>
        <StarIcon />
      </DifficultyBar>
      <h3>{props.title}</h3>
      <DatetimeBar>
        <p>
          <span>{props.date}</span>, <span>{props.time}</span>
        </p>
        {isTimeout && <FireIcon />}
      </DatetimeBar>
      <Category category={props.category}>{props.category}</Category>
    </Card>
  );
};

export default QuestCard;
