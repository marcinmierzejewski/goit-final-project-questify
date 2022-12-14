import styled from "styled-components";

export const CardModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  /* display: flex; */
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: 5; */
  background: rgba(21, 57, 90, 0.3);
  border-radius: 10px;
`;

export const Modal = styled.div`
  background: #ffffff;
  padding: 30px 10px 21px 10px;
  box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.03),
    3px 4px 4px rgba(21, 57, 90, 0.03);
  border-radius: 10px;
  width: 80%;
  font-size: 16px;
  line-height: 16px;
  position: absolute;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 12px;
    padding: 25px 10px 16px 10px;
  }

  & p {
    font-weight: 550;
    text-align: center;
    margin-bottom: 14px;
    color: #282828;
    line-height: 1.2;
  }

  & div {
    text-align: center;
    color: #b9c3c8;
    padding-left: 31px;
    padding-right: 30px;
  }

  & button {
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #24d40c;
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      font-size: 10px;
    }
  }

  & button:last-child {
    color: #db0938;
    margin-left: 11px;
  }

  & button:first-child {
    margin-right: 11px;
  }
`;
