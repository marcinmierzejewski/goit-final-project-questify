import React from "react";
import { useGetAllUserCardQuery } from "../../redux/slices/questifyAPI";
import PageLoader from "../PageLoader/PageLoader";
import Card from "./Card";
import NewQuestCard from "../NewQuestCard/NewQuestCard";
import NewTaskBtn from "../NewTaskBtn/NewTaskBtn";
import { useState } from "react";
import { List, TimeTitle } from "./CardGroupContainer.styled";
import { todayDateInMs, tomorrowDateInMs } from "../../utils/datetime";

const CardGroupContainer = () => {
  const {
    data: { cards } = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllUserCardQuery();

  const [isCardInPreparation, setIsCardInPreparation] = useState(false);

  const preparingCardToCreate = () => setIsCardInPreparation(true);

  const isToday = (date) => date === todayDateInMs;
  const isTomorrow = (date) => date === tomorrowDateInMs;

  const assignTerm = (date) => {
    const checkedDate = new Date(date).getTime();

    if (checkedDate < todayDateInMs) {
      return "previous";
    }

    if (isToday(checkedDate)) {
      return "today";
    }

    if (isTomorrow(checkedDate)) {
      return "tomorrow";
    }

    return "next";
  };

  const filterCardsByGroup = (groupName) =>
    cards.filter((c) => assignTerm(c.date) === groupName);

  const renderView = () => {
    if (isLoading) {
      <PageLoader>Loading...</PageLoader>;
    } else if (isSuccess) {
      return (
        <>
          <div>
            {filterCardsByGroup("previous").length > 0 && <TimeTitle>From previous days</TimeTitle>}
            <List>
              {filterCardsByGroup("previous").map((c) => (
                  <Card key={c._id} {...c} />
              ))}
            </List>
          </div>

          <div>
            {filterCardsByGroup("today").length > 0 && <TimeTitle>Today</TimeTitle>}
            <List>
              {isCardInPreparation && <NewQuestCard />}
              {filterCardsByGroup("today").map((c) => (
                  <Card key={c._id} {...c} />
              ))}
            </List>
          </div>

          <div>
            {filterCardsByGroup("tomorrow").length > 0 && <TimeTitle>Tomorrow</TimeTitle>}
            <List>
              {filterCardsByGroup("tomorrow")
                .map((c) => (
                  <Card key={c._id} {...c} />
              ))}
            </List>
          </div>

          <div>
            {filterCardsByGroup("next").length > 0 && <TimeTitle>For the next days</TimeTitle>}
            <List>
              {filterCardsByGroup("next")
                .map((c) => (
                  <Card key={c._id} {...c} />
              ))}
            </List>
          </div>
          
          <NewTaskBtn onClick={preparingCardToCreate} />
        </>
      );
    } else if (!isSuccess) {
      return (
        <>
          {isCardInPreparation ? (
            <NewQuestCard />
          ) : (
            <p>No quests on the board.</p>
          )}
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
