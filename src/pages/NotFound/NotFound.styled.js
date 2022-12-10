import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 20px 0;
  text-align: center;
  background-image: linear-gradient(
    to right top,
    #30c9ff,
    #56cffa,
    #72d5f6,
    #8adbf3,
    #a0e0f0,
    #a0e0f0,
    #a0e0f0,
    #a0e0f0,
    #8adbf3,
    #72d5f6,
    #56cffa,
    #30c9ff
  );

  h1 {
    font-size: 64px;
    font-weight: 700;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #2aa608;

  &:hover,
  &:focus {
    color: #002dff;
  }
`;
