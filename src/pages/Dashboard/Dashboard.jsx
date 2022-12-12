import React from "react";
import AppBar from "../../components/AppBar/AppBar";
import MainSection from "../../components/MainSection/MainSection";
import CardList from "../../components/Cards/CardList";

const Dashboard = () => {
  return (
    <div>
      <AppBar />
      <MainSection>
        <CardList />
      </MainSection>
    </div>
  );
};

export default Dashboard;
