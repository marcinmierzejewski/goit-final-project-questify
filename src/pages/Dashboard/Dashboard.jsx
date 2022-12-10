import React from "react";
import AppBar from "../../components/AppBar/AppBar";
import MainSection from "../../components/MainSection/MainSection";

import QuestList from "../../components/QuestList/QuestList";

const Dashboard = () => {
  return (
    <div>
      <AppBar />
      <MainSection>
        <p>Today</p>
        <QuestList />
       
      </MainSection>
      
    </div>
  );
};

export default Dashboard;
