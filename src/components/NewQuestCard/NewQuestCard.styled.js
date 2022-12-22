import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 260px;
  width: 290px;
  position: relative;
  padding: 19px 21px 31px 0;
  border-radius: 10px;
  line-height: 1;
  color: #282828;
  background-color: ${(props) =>
    props.cardType === true ? "#fff" : "#15395A"};
  box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.03),
    3px 4px 4px rgba(21, 57, 90, 0.03);

  & p {
    letter-spacing: 0.02em;
  }

  & > h3 {
    margin-top: 69px;
    padding-left: 21px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 21px;
    height: 199px;
    width: 205px;

    & > h3 {
      margin-top: 42px;
      font-size: 16px;
    }
  }
`;
