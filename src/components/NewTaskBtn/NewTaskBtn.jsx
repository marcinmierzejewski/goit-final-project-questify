import React from "react";
import { Div } from "./NewTaskBtn.styled";
import { useSelector } from "react-redux";

const NewTaskBtn = ({ onClick }) => {
  const isActiveChallenge = useSelector(state => state.user.challengeFIlter)
  return (
    <Div isActiveChallenge={isActiveChallenge}>
      <button onClick={onClick}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1601 7.24037H7.23999V1.16034C7.23999 0.740915 7.58051 0.400391 8.00008 0.400391C8.4195 0.400391 8.76003 0.740915 8.76003 1.16034V7.24037H14.8401C15.2595 7.24037 15.6 7.58089 15.6 8.00032C15.6 8.41989 15.2595 8.76041 14.8401 8.76041H8.76003V14.8403C8.76003 15.2599 8.4195 15.6004 8.00008 15.6004C7.58051 15.6004 7.23999 15.2599 7.23999 14.8403V8.76041H1.1601C0.74053 8.76041 0.400006 8.41989 0.400006 8.00032C0.400006 7.58089 0.74053 7.24037 1.1601 7.24037Z"
            fill="white"
          />
        </svg>
      </button>
    </Div>
  );
};

export default NewTaskBtn;
