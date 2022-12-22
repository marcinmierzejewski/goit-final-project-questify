import LandingWelcome from "./LandingWelcome/LandingWelcome";
import LandingForm from "./LandingForm/LandingForm";
import LandingBg from "./LandingBg/LandingBg";
import { Container, Wrapper } from "./Landing.styled";
import { useEffect } from "react";
import Cookie from "../Cookie/Cookie";

const Landing = () => {
	useEffect(() => {
		document.body.style.backgroundColor = "white";
	}, []);
	return (
		<>
			<Wrapper>
				<Container>
					<LandingWelcome />
					<LandingForm />
				</Container>
				<LandingBg />
			</Wrapper>
			<Cookie />
		</>
	);
};

export default Landing;
