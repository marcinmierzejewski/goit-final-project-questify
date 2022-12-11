import styled from "styled-components";

export const ImgUp = styled.img`
	position: absolute;
	right: 20px;
	bottom: -520px;
	z-index: -1;

	@media screen and (min-width: 768px) and (max-width: 1020px) and (orientation: portrait) {
		top: -200px;
		right: -470px;
	}
	@media screen and (min-width: 1020px) and (max-width: 1280px) and (orientation: landscape) {
		top: -260px;
		right: -360px;
	}
	@media screen and (min-width: 1280px) {
		right: -350px;
		bottom: 430px;
	}
`;

export const ImgDown = styled.img`
	position: absolute;
	right: -48px;
	bottom: -320px;
	z-index: -1;
	@media screen and (min-width: 768px) and (max-width: 1020px) and (orientation: portrait) {
		bottom: -535px;
		right: -725px;
	}
	@media screen and (min-width: 1020px) and (max-width: 1280px) and (orientation: landscape) {
		top: 230px;
		right: -550px;
	}
	@media screen and (min-width: 1280px) {
		right: -550px;
		bottom: -490px;
	}
`;
