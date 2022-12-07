import styled from 'styled-components';

export const TrophyCircle = styled.div`
  background: #00D7FF;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #00D7FF;
      filter: blur(4px);
      z-index: -1;
      

  }
`