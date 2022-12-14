import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useTimeout } from "../../hooks/useTimeout";
import { convertDayDisplay } from "../../utils/convertDayDisplay";
import { ReactComponent as FireIcon } from "./images/fire.svg";
import { ReactComponent as StarIcon } from "./images/star.svg";
import { ReactComponent as TrophyIcon } from "./images/trophy.svg";
import { ReactComponent as QuestAwardIcon } from "./images/quest-award.svg";
import { ReactComponent as ChallengeAwardIcon } from "./images/challenge-award.svg";
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import {
  CardItem,
  CardType,
  Category,
  DatetimeBar,
  DifficultyBar,
  FlippedCard,
  ContinueBox,
  CardContainer,
} from "./Card.styled";
import { useCompleteCardMutation } from "../../redux/slices/questifyAPI";
import EditCard from "../EditCard/EditCard";

const Card = ({ _id: id, title, difficulty, category, date, time, type }) => {
  const [completeCard] = useCompleteCardMutation();
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleIsFlipped = () => {
    setIsFlipped((current) => !current);
    !isFlipped && toggleDeleteModal();
  };

  const questDatetime = new Date(`${date}T${time}`).getTime();
  const isTimeout = useTimeout(questDatetime);

  const convertedDate = convertDayDisplay(date, type);

  const isChallenge = (type) => type === "Challenge";
  const typeIcon = isChallenge(type) ? (
    <TrophyIcon onClick={toggleIsFlipped} />
  ) : (
    <StarIcon onClick={toggleIsFlipped} />
  );
  const awardIcon = isChallenge(type) ? (
    <ChallengeAwardIcon />
  ) : (
    <QuestAwardIcon />
  );

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleDeleteModal = () => {
    console.log(isDeleteModalOpen)
    setIsDeleteModalOpen((isDeleteModalOpen) => !isDeleteModalOpen);
  }   

  const shortenTitle = (() => {
    if (title.length > 18) {
      return `${title.slice(0, 17)}...`;
    }

    return title;
  })();

  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const editOpen = () =>
  setIsEditModalOpen(true);
  const editClose = ()=> setIsEditModalOpen(false);

  return (
    <CardContainer>
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <CardItem cardType={type}>
        <DifficultyBar cardType={type} difficulty={difficulty}>
          <p>{difficulty}</p>
          {typeIcon}
        </DifficultyBar>
        {isChallenge(type) && <CardType>{type}</CardType>}
        <h3 onClick={editOpen} >{title}</h3>
        <DatetimeBar>
          <p>
            <span>{convertedDate}</span>, <span>{time}</span>
          </p>
          {isTimeout && <FireIcon />}
        </DatetimeBar>
        <Category category={category}>{category}</Category>
        {/* <CardDelete cardType={type} cardId={id} isOpen={isDeleteModalOpen} /> */}
      </CardItem>
      <FlippedCard>
        <p>
          COMPLETED: <span onClick={toggleIsFlipped}>{shortenTitle}</span>
        </p>
        {awardIcon}
        <ContinueBox onClick={() => completeCard(id)}>
          <p>Continue</p>
          <ArrowIcon />
        </ContinueBox>
      </FlippedCard>
    </ReactCardFlip>
    {isEditModalOpen && 
        <EditCard 
        isEdit={isEditModalOpen}
        cardTitle={title} 
        cardDifficulty={difficulty}
        cardCategory={category}
        cardId= {id}
        cardType={type}
        onCancel={editClose}
        />
      }

    </CardContainer>
  );
};

export default Card;
