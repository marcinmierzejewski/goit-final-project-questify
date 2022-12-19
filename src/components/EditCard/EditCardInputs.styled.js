import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-left: 21px;
  text-align: center;
  margin-bottom: 8px;
  & label {
    width: 128px;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #b9c3c8;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      font-size: 12px;
      line-height: 12px;
    }
  }

  & input {
    margin-top: 10px;
    width: 100%;
    border: none;
    /* border-radius: ${(props) => (props.cardType === "Challenge" && "20px")}; */
    border-bottom: 2px solid #00d7ff;
    outline: transparent;
    padding: 2px 4px;
    caret-color: #00d7ff;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #282828;
    text-align: center;
    color: ${(props) => (props.cardType === "Challenge" && "#fff")};
    background: ${(props) => (props.cardType === "Challenge" && "#15395A;")};
    
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 16px;
      margin-top: 5px;
    }
  }
`;

export const DatetimeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 37px;
  padding-left: 21px;

  & input {
    width: 120px;
    border: none;
    outline: none;
    padding: 0;
    font-size: 14px;
    color: ${(props) => (props.cardType === "Challenge" ? "#fff" : '#282828')};
    text-align: center;
    &::placeholder {
      color: #282828;
    }
  }
  & fieldset {
    border: none;
    outline: transparent;
  }
  & button {
    padding: 0;
  }
  & svg {
    width: 12px;
    height: 14px;
    fill: #00d7ff;
  }
`;
