import React from "react";
import { useGetAllUserCardQuery } from "../../redux/slices/questifyAPI";
import PageLoader from "../PageLoader/PageLoader";
import QuestCard from "../QuestCard/QuestCard";
import { List } from "./QuestList.styled";

const QuestList = () => {
  const {
    data: { cards } = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllUserCardQuery();

  return (
    <>
      {isLoading && <PageLoader>Loading...</PageLoader>}
      {isSuccess && (
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
      )}
      {!isSuccess && <p>No quests on the board.</p>}
      {isError && <p>{error.toString()}</p>}
    </>
  );
};

export default QuestList;
