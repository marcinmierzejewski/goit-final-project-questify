import styled from "styled-components";

export const ImgUp = styled.img`
	position: absolute;
	bottom: 0;
	z-index: -1;

	@media screen and (min-width: 768px) and (max-width: 1020px) {
		top: 0;
		right: 0;
	}
	@media screen and (min-width: 1020px) and (max-width: 1280px) {
		top: 0;
		right: 0;
	}
	@media screen and (min-width: 1280px) {
		top: 0;
		right: 0;
	}
`;

export const ImgDown = styled.img`
	position: absolute;
	bottom: 0;
	z-index: -1;
	@media screen and (min-width: 768px) and (max-width: 1019px) {
		bottom: 0;
		right: 0;
	}
	@media screen and (min-width: 1020px) and (max-width: 1279px) {
		bottom: 0;
		right: 0;
	}
	@media screen and (min-width: 1280px) {
		bottom: 0;
		right: 0;
	}
`;
