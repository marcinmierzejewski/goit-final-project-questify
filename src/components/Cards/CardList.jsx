import React from "react";
import { useGetAllUserCardQuery } from "../../redux/slices/questifyAPI";
import PageLoader from "../PageLoader/PageLoader";
import QuestCard from "./Card";
import { List } from "./CardList.styled";

const QuestList = () => {
  const {
    data: { cards } = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllUserCardQuery();

  const checkContent = () => {
    if (isLoading) {
      <PageLoader>Loading...</PageLoader>;
    } else if (isSuccess) {
      return (
        <List>
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
