import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "../../components/AppBar/AppBar";
import MainSection from "../../components/MainSection/MainSection";
import CardGroupContainer from "../../components/Cards/CardGroupContainer";
import { useRefreshMutation } from "../../redux/slices/questifyAPI";
import Cookies from "js-cookie";
import { addUser } from "../../redux/slices/userSlice";
import { addToken } from "../../redux/slices/tokenSlice";

const Dashboard = () => {
	const [refresh] = useRefreshMutation();
	const dispatch = useDispatch();
	const token = useSelector((state) => state.user.refreshToken);
	const sid = useSelector((state) => state.user.sid);

	setInterval(() => {
		if (token) {
			refresh(JSON.stringify({ sid: sid }))
				.unwrap()
				.then(({ newAccessToken, newSid, newRefreshToken }) => {
					Cookies.set("token", newAccessToken);
					if (newAccessToken) {
						dispatch(
							addUser({
								sid: newSid,
								refreshToken: newRefreshToken,
							})
						);
						dispatch(addToken({ token: newAccessToken }));
					}
				});
		}
	}, 10000);

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
