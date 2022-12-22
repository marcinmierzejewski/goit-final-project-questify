import styled from "styled-components";

export const CardDeleteWrapper = styled.div`
  display: ${(props) =>
    props.isOpen ? "flex" : "none"};
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

export const DeleteMenu = styled.div`
  background: #ffffff;
  padding: 30px 0px 21px 0px;
  box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.03),
    3px 4px 4px rgba(21, 57, 90, 0.03);
  border-radius: 10px;
  width: calc(100% - 42px);
  font-size: 16px;
  line-height: 16px;
  position: absolute;
  top: 95px;
  left: 21px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 12px;
    padding: 25px 0px 16px 0px;
    top: 74px;
  }

  & p {
    font-weight: 550;
    text-align: center;
    margin-bottom: 14px;
    color: #282828;
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
    line-height: 10px;
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
