import React from "react";
import { useGetAllUserCardQuery } from "../../redux/slices/questifyAPI";
import PageLoader from "../PageLoader/PageLoader";
import QuestCard from "../Cards/Card";
import NewQuestCard from "../NewQuestCard/NewQuestCard";
import NewTaskBtn from "../NewTaskBtn/NewTaskBtn";
import { List } from "./CardList.styled";
import { useState } from "react";
const QuestList = () => {
  const {
    data: { cards } = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllUserCardQuery();
  const [createNew, setCreateNew] = useState(false);

  const handleClick = () => setCreateNew(true);

  const checkContent = () => {
    if (isLoading) {
      <PageLoader>Loading...</PageLoader>;
    } else if (isSuccess) {
      return (
        <List>
          {createNew && <NewQuestCard />}
          {cards.map((c) => (
            <QuestCard
              key={c._id}
              id={c._id}
              title={c.title}
              difficulty={c.difficulty}
              category={c.category}
              date={c.date}
              time={c.time}
              type={c.type}
            />
          ))}
        </List>
      );
    } else if (!isSuccess) {
      return <p>No quests on the board.</p>;
    } else if (isError) {
      return isError && <p>Error: {error}</p>;
    }
  };

  let questListContent = checkContent();

  return <>{questListContent}</>;
};

export default QuestList;
