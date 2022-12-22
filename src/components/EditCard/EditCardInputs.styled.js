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
    margin-top: 5px;
    width: 100%;
    border: none;
    /* border-radius: ${(props) => props.cardType === "Challenge" && "20px"}; */
    border-bottom: 2px solid #00d7ff;
    outline: transparent;
    padding: 2px 4px;
    caret-color: #00d7ff;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #282828;
    text-align: center;
    color: ${(props) => props.cardType === "Challenge" && "#fff"};
    background: ${(props) => props.cardType === "Challenge" && "#15395A;"};

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 16px;
      margin-top: 3px;
    }
  }
`;

export const DatetimeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
  padding-left: 21px;

  & input {
    width: 150px;
    border: none;
    outline: none;
    padding: 0;
    font-size: 18px;
    color: ${(props) =>
      props.cardType === "Challenge" ? "#b9c3c8" : "#b9c3c8"};
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
    width: 18px;
    height: 18px;
    fill: #00d7ff;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    & input {
      width: 120px;
      font-size: 14px;
    }
    & svg {
      width: 12px;
      height: 14px;
    }
  }
`;
