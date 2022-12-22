import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as ListBtnIconUp } from "./images/listBtnUp.svg";
import { ReactComponent as ListBtnIconDown } from "./images/listBtnDown.svg";
import { todayDateInMs, tomorrowDateInMs } from "../../utils/datetime";
import { TimeTitle, OverflowDiv } from "./CardGroup.styled";
import CardList from "./CardList";

const CardGroup = ({ cards, groupName, cardPreparation }) => {
  const challengeState = useSelector((state) => state.user.challengeFIlter);
  const [isDoneClicked, setIsDoneClicked] = React.useState(false);

  const toggleisDoneClicked = () => {
    setIsDoneClicked((current) => !current);
  };

  const isToday = (date) => date === todayDateInMs;
  const isTomorrow = (date) => date === tomorrowDateInMs;

  const isComplete = (status) => status === "Complete";

  const assignGroup = (cardData) => {
    const { date, status } = cardData;
    const checkedDate = new Date(date).getTime();
    if (isComplete(status) && !isDoneClicked) {
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

    if (checkedDate > tomorrowDateInMs) {
      return "next";
    }
  };

  const filterCardsByGroup = (groupName) => {
    if (challengeState) {
      return cards.filter(
        (c) => c.type === "Challenge" && c.status !== "Complete"
      );
    } else if (isDoneClicked) {
      return cards.filter((c) => assignGroup(c) !== "done");
    } else {
      return cards.filter((c) => assignGroup(c) === groupName);
    }
  };

  const filterDone = () => {
    if (challengeState) {
      return cards.filter(
        (c) => c.type === "Challenge" && c.status !== "Complete"
      );
    }
    return cards.filter((c) => assignGroup(c) === groupName);
  };

  return (
    <OverflowDiv>
      <TimeTitle onClick={toggleisDoneClicked}>
        {cardPreparation && <p>{groupName}</p>}
        {filterCardsByGroup(groupName).length > 0 && (
          <p>
            {groupName}
            {groupName === "done" && (
              <>
                {isDoneClicked ? <ListBtnIconUp /> : <ListBtnIconDown />}
                <span></span>
              </>
            )}
          </p>
        )}
      </TimeTitle>

      <CardList
        groupName={groupName}
        filterCardsByGroup={filterDone}
        cardPreparation={cardPreparation}
      />
    </OverflowDiv>
  );
};

export default CardGroup;
