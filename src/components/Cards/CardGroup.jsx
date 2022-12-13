import React from 'react'
import { todayDateInMs, tomorrowDateInMs } from '../../utils/datetime';
import Card from './Card';
import { List, TimeTitle } from "./CardGroup.styled";

const CardGroup = ({cards, groupName, children}) => {

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
      {filterCardsByGroup(groupName).length > 0 && <TimeTitle>Today</TimeTitle>}
      <List>
        {children}
        {filterCardsByGroup(groupName).map((c) => (
            <Card key={c._id} {...c} />
        ))}
      </List>
    </div>
  )
}

export default CardGroup