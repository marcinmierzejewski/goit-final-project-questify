import React from "react";
import AppBar from "../../components/AppBar/AppBar";
import MainSection from "../../components/MainSection/MainSection";
import CardGroupContainer from "../../components/Cards/CardGroupContainer";

const Dashboard = () => {
	return (
		<div>
			<AppBar />
			<MainSection>
				<CardGroupContainer />
			</MainSection>
		</div>
	);
};

export default Dashboard;
