import CookieConsent from "react-cookie-consent";

const Cookie = () => {
	return (
		<>
			<CookieConsent
				cookieName="cookies"
				style={{
					background: "#15395a",
					textAlign: "center",
					justifyContent: "center",
				}}
				buttonStyle={{
					border: "2px solid #15395a",
					borderRadius: "10px",
					outline: "none",
					background: "#00d7ff",
					padding: "6px",
					color: "#fff",
					fontSize: "1em",
				}}
				expires={365}>
				This website uses cookies to enhance the user experience.{" "}
			</CookieConsent>
		</>
	);
};

export default Cookie;
