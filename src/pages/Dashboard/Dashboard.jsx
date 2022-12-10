import React from "react";
import { AppBar } from "../../components/AppBar/AppBar";
import QuestCard from "../../components/Card/QuestCard";
import NewTaskBtn from "../../components/NewTaskBtn/NewTaskBtn";
import PageLoader from "../../components/PageLoader/PageLoader";
import { useGetAllUserCardQuery } from "../../redux/slices/questifyAPI";

const Dashboard = () => {
  const { data: {cards} = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllUserCardQuery();

  // let filteredCards = useMemo(() => {
  //   if (cards.length > 0) {
  //     return cards
  //     .sort((a, b) => a.time.localeCompare(b.time));
  //   }
  //   return [];
  // }, [cards]);

  let questContent = <p>No quests on the board.</p>;
  if (isLoading) {
    questContent = <PageLoader>Loading...</PageLoader>;
  } else if (isSuccess) {
    cards.length !== 0
      ? (questContent = (
          <ul>
            {cards.map(c => (
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
          </ul>
        ))
      : (questContent = <p>No quests on the board.</p>);
  } else if (isError) {
    questContent = <p>{error.toString()}</p>;
  }

  return (
    <div>
      <AppBar />
      <div>
        <p>Today</p>
        {questContent}
      </div>
      <NewTaskBtn />
    </div>
  );
};

export default Dashboard;
