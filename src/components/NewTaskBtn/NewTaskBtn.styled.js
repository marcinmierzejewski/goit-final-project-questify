import styled from "styled-components";

export const Main = styled.main`
  button {
    width: 52px;
    height: 52px;
    background: #ff851c;
    z-index: 100;
    border-radius: 100%;
    border: none;
    filter: blur(0.7px);
    position: fixed;
    bottom: 30px;
    right: 30px;
    :hover {
      background-color: #00d7ff;
      transition: 0.2s;
    }
    :active {
      background-color: #47aad5;
    }
  }
`;