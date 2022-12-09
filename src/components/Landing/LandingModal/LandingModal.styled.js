import styled from "styled-components";

export const DarkBg = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	width: 100vw;
	height: 100vh;
	z-index: 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
`;

export const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Modal = styled.div`
	width: 250px;
	height: 170px;
	padding: 40px 10px;
	background: white;
	color: white;
	z-index: 10;
	border-radius: 16px;
	box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const CloseBtn = styled.button`
	cursor: pointer;
	font-weight: 500;
	padding: 4px 8px;
	border-radius: 8px;
	border: none;
	font-size: 18px;
	color: #2c3e50;
	background: white;
	transition: all 0.25s ease;
	box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
	position: absolute;
	right: 0;
	top: 0;
	align-self: flex-end;
	margin-top: -7px;
	margin-right: -7px;
	&:hover {
		box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
		transform: translate(-4px, 4px);
	}
`;
