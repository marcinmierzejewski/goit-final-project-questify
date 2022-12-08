import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #242a37;
  box-shadow: 0px 4px 4px rgba(36, 42, 55, 0.1);
  position: relative;
  z-index: 0;
  padding: 0 50px;

  @media screen and (max-width: 320px) {
    padding: 0 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1140px;
  height: 70px;

  @media screen and (max-width: 320px) {
    height: 60px;
  }
`;
