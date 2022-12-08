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
      background-color: #b36b00;
      transition: 0.7s;
    }
  }
`;