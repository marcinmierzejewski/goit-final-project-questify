import React from "react";
import { useGetAllUserCardQuery } from "../../redux/slices/questifyAPI";
import PageLoader from "../PageLoader/PageLoader";
import Card from "./Card";
import NewQuestCard from "../NewQuestCard/NewQuestCard";
import NewTaskBtn from "../NewTaskBtn/NewTaskBtn";
import { useState } from "react";
import { List, TimeTitle } from "./CardList.styled";
import { today, currentTime, tomorrow } from "../../utils/datetime"

const CardList = () => {
  const {
    data: { cards } = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllUserCardQuery();

  const [createNew, setCreateNew] = useState(false);



  const handleClick = async() => { 
    setCreateNew(true);
  }

 


  const checkContent = () => {
    if (isLoading) {
      <PageLoader>Loading...</PageLoader>;
    } else if (isSuccess) {
      return (
        <>
          <div>
            {cards.filter((c) => c.date === today && c.time < currentTime).length > 0 &&
              <TimeTitle>Overdue</TimeTitle>
            }
            
          <List>
            {createNew}
              {cards.filter((c) => c.date === today && c.time < currentTime).map((c) => (
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
          </div>
          <div>
            {cards.filter((c) => c.date === today && c.time > currentTime).length > 0 &&
              <TimeTitle>Today</TimeTitle>
            }
            
            <List>
              {createNew && <NewQuestCard />}
              {cards.filter((c) => c.date === today && c.time > currentTime).map((c) => (
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
          </div>
          <div>
            {cards.filter((c) => c.date === tomorrow).length > 0 &&
              <TimeTitle>Tomorrow</TimeTitle>
            }
            <List>
              {createNew && cards.filter((c) => c.date === tomorrow).length > 0}
              {cards.filter((c) => c.date === tomorrow).map((c) => (
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
          </div>
          <div>
            {cards.filter((c) => c.date > tomorrow).length > 0 &&
              <TimeTitle>Later</TimeTitle>
            }
            <List>
              {createNew}
              {cards.filter((c) => c.date > tomorrow).map((c) => (
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
          </div>
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
