import styled from "styled-components";

export const OverflowDiv = styled.div`
  overflow: hidden;
`

export const TimeTitle = styled.div`
  position: relative;
  cursor: pointer;
  & p {
    margin-bottom: 25px;
    margin-top: 30px;
    font-weight: 300;
    font-size: 15px;
    line-height: 1;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #282828;
  }

  & svg {
    position: absolute;
    top: 6px;
    margin-left: 4px;
  }

  & span {
    position: absolute;
    top: 5px;
    display: block;
    border-top: 3px dashed #b9c3c8;
    width: 100%;
    margin-left: 60px;
  }
`;

