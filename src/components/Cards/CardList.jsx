import React from "react";
import { useGetAllUserCardQuery } from "../../redux/slices/questifyAPI";
import PageLoader from "../PageLoader/PageLoader";
import Card from "./Card";
import NewQuestCard from "../NewQuestCard/NewQuestCard";
import NewTaskBtn from "../NewTaskBtn/NewTaskBtn";
import { useState } from "react";
import { List } from "./CardList.styled";

const CardList = () => {
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
        <>
          <List>
            {createNew && <NewQuestCard />}
            {cards.map((c) => (
              <Card
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
          <NewTaskBtn onClick={handleClick} />
        </>
      );
    } else if (!isSuccess) {
      return (
        <>
          {createNew ? <NewQuestCard /> : <p>No quests on the board.</p>}
          <NewTaskBtn onClick={handleClick} />
        </>
      );
    } else if (isError) {
      return isError && <p>Error: {error}</p>;
    }
  };

  let cardListContent = checkContent();

  return (
    <>
      {cardListContent}
    </>
  );
};

export default CardList;
