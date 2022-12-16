import styled from "styled-components";

export const Card = styled.li`
  display: ${(props) =>
    props.isEdit ? "inline-block" : "none"};//
  /* position: relative; */
  padding: 18px 21px 33px 0;
  border-radius: 10px;
  line-height: 1;
  color: #282828;
  background-color: #fff;
  position: absolute; //
  top: 0;  //
  left:0; //
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

    & > h3 {
      margin-top: 42px;
      font-size: 16px;
    }
  }
`;
