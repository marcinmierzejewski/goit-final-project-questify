import styled from "styled-components";

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TrophyCircle = styled.p`
  background: #00d7ff;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 38px;
  position: relative;
  fill: "#242A37";

  @media screen and (max-width: 500px) {
    margin-right: 10px;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #00d7ff;
    filter: blur(4px);
    z-index: -1;
  }
`;
export const LogOutBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
