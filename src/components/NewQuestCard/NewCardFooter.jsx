import React from "react";
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import { ReactComponent as LineIcon } from "./images/Line.svg";
import {
  FooterCardBar,
  CategorySelect,
  StartWrapper,
  StartSpan,
  ClearIconWrapper,
} from "./NewCardFooter.styled";

const NewCardFooter = ({ category, onClick, onClearClick, onStartClick }) => {
  return (
    <FooterCardBar>
      <CategorySelect category={category} onClick={onClick}>
        <p>{category}</p>
        <ArrowIcon />
      </CategorySelect>
      <StartWrapper>
        <ClearIconWrapper onClick={onClearClick} />
        <LineIcon />
        <StartSpan onClick={onStartClick}>START</StartSpan>
      </StartWrapper>
    </FooterCardBar>
  );
};

export default NewCardFooter;
