import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #00d7ff;
`;

export const NoUserText = styled.span`
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #7b8aa4;

  @media screen and (max-width: 480px) {
    display: none;
    font-size: 15px;
  }
`;
