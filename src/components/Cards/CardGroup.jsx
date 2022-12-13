import React from "react";
import { todayDateInMs, tomorrowDateInMs } from "../../utils/datetime";
import { TimeTitle } from "./CardGroup.styled";
import CardList from "./CardList";

const CardGroup = ({ cards, groupName, cardPreparation }) => {
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

  const filterCardsByGroup = (name) =>
    cards.filter((c) => assignTerm(c.date) === groupName);

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
