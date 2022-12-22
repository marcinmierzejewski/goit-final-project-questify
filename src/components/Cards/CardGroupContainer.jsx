import React from "react";
import { useSelector } from "react-redux";
import { useGetAllUserCardQuery } from "../../redux/slices/questifyAPI";
import PageLoader from "../PageLoader/PageLoader";
import NewQuestCard from "../NewQuestCard/NewQuestCard";
import NewTaskBtn from "../NewTaskBtn/NewTaskBtn";
import CardGroup from "./CardGroup";
import { useCardPreparing } from "../../hooks/useCardPreparing";


const CardGroupContainer = () => {
  const challengeState = useSelector((state) => state.user.challengeFIlter)

  const {
    data: { cards } = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllUserCardQuery();


  const {
    isCardInPreparation,
    preparingCardToCreate,
    cancelingCardToPreparing,
  } = useCardPreparing();

  const cardPreparation = isCardInPreparation && (
    <NewQuestCard onCancel={cancelingCardToPreparing} />
  );

  const renderView = () => {
    if (isLoading) {
      <PageLoader>Loading...</PageLoader>;
    } else if (isSuccess) {
      return (
        <>
          {!challengeState ? (
            <>
              <CardGroup
                cards={cards}
                groupName="create new card"
                cardPreparation={cardPreparation}
              />
              <CardGroup cards={cards} groupName="previous" />
              <CardGroup cards={cards} groupName="today" />
              <CardGroup cards={cards} groupName="tomorrow" />
              <CardGroup cards={cards} groupName="next" />

              <CardGroup cards={cards} groupName="done" />
            </>
          ) : (
            <CardGroup cards={cards} groupName="challenge" />
          )}
          <NewTaskBtn onClick={preparingCardToCreate} />
        </>
      );
    } else if (!isSuccess) {
      return (
        <>
          {cardPreparation}
          {!isCardInPreparation && <p>No quests on the board.</p>}
          <NewTaskBtn onClick={preparingCardToCreate} />
        </>
      );
    } else if (isError) {
      return isError && <p>Error: {error}</p>;
    }
  };

  let cardListView = renderView();

  return <>{cardListView}</>;
};

export default CardGroupContainer;
