import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useTimeout } from "../../hooks/useTimeout";
import { convertDayDisplay } from "../../utils/convertDayDisplay";
import { ReactComponent as FireIcon } from "./images/fire.svg";
import { ReactComponent as StarIcon } from "./images/star.svg";
import { ReactComponent as TrophyIcon } from "./images/trophy.svg";
import { ReactComponent as AwardIcon } from "./images/award.svg";
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import {
  CardItem,
  CardType,
  Category,
  DatetimeBar,
  DifficultyBar,
  FlippedCard,
} from "./Card.styled";
import CardDelete from "../CardDelete/CardDelete";

const Card = ({ _id: id, title, difficulty, category, date, time, type }) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const toggleIsFlipped = () => {
    setIsFlipped((current) => !current);
    console.log("FLIPED");
    toggleDeleteModal();
  };

  const toggleIsFlippedAgain = () => {
    setIsFlipped((current) => !current);
    console.log("FLIPED");
  };


  const questDatetime = new Date(`${date}T${time}`).getTime();
  const isTimeout = useTimeout(questDatetime);

  const convertedDate = convertDayDisplay(date, type);

  const isChallenge = (type) => type === "Challenge";
  const TypeIcon = isChallenge(type) ? <TrophyIcon /> : <StarIcon onClick={toggleIsFlipped} />;

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


  const toggleDeleteModal = () =>
    setIsDeleteModalOpen((isDeleteModalOpen) => !isDeleteModalOpen);
  

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    <CardItem data-id={id} cardType={type} onClick={toggleDeleteModal}>
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
          {isTimeout && <FireIcon/>}
      </DatetimeBar>
      <Category category={category}>{category}</Category>
      <CardDelete cardType={type} cardId={id} isOpen={isDeleteModalOpen} />
      </CardItem>
      <FlippedCard  onClick={toggleIsFlippedAgain}>
        <p>COMPLETED: {title}...</p>
        <AwardIcon />
        <div>
          <p>Continue</p>
          <ArrowIcon/>
        </div>
      </FlippedCard>
    </ReactCardFlip>
  );
};

export default Card;
