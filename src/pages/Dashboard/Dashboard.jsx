import React from "react";
import { AppBar } from "../../components/AppBar/AppBar";
import NewTaskBtn from "../../components/NewTaskBtn/NewTaskBtn";

const Dashboard = () => {
  return (
    <div>
      <AppBar />
      <NewTaskBtn />
    </div>
  );
};

export default Dashboard;
