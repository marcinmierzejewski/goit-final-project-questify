import React from "react";
import { todayDateInMs, tomorrowDateInMs } from "../../utils/datetime";
import { TimeTitle } from "./CardGroup.styled";
import CardList from "./CardList";

const CardGroup = ({ cards, groupName, cardPreparation }) => {
  const isToday = (date) => date === todayDateInMs;
  const isTomorrow = (date) => date === tomorrowDateInMs;

  const isComplete = (status) => status === "Complete";

  const assignGroup = (cardData) => {
    const {date, status} = cardData;
    const checkedDate = new Date(date).getTime();

    if (isComplete(status)) {
      return "done";
    }

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
    cards.filter((c) => assignGroup(c) === groupName);

  return (
    <div>
      {filterCardsByGroup(groupName).length > 0 && (
        <TimeTitle>{groupName}</TimeTitle>
      )}
      <CardList
        groupName={groupName}
        filterCardsByGroup={filterCardsByGroup}
        cardPreparation={cardPreparation}
      />
    </div>
  );
};

export default CardGroup;
