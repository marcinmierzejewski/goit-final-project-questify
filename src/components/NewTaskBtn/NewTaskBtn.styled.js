import styled from "styled-components";

export const Div = styled.div`
  button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    background: #ff851c;
    border-radius: 100%;
    border: none;
    z-index: 100;
    filter: blur(0.7px);

    &:hover {
      background-color: #00d7ff;
      transition: 0.2s;
    }

    &:active {
      background-color: #47aad5;
    }
  }
`;
