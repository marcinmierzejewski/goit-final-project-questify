import styled from "styled-components";

export const HomeLogo = styled.p`
  display: flex;
  align-items: center;
  font-family: "HelveticaNeueCyr";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #00d7ff;
  padding: 0;
  margin: 0;
  height: 100%;

  @media screen and (max-width: 480px) {
    margin-right: 30%;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
