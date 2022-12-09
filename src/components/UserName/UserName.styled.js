import styled from "styled-components";

export const UserDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #7b8aa4;
`;

export const UserInitial = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: #3e4e6c;
  font-weight: 900;
  font-size: 17px;
  line-height: 16px;
  margin-right: 10px;
  color: #ffffff;
`;

export const UserText = styled.p`
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
