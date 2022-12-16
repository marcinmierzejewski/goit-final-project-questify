import React from "react";
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import { ReactComponent as LineIcon } from "./images/Line.svg";
import { ReactComponent as DoneIcon } from "./images/done.svg";
import { ReactComponent as SaveIcon } from "./images/save.svg";
import {
  FooterCardBar,
  CategorySelect,
  StartWrapper,
  // StartSpan,
  ClearIconWrapper,
} from "./EditCardFooter.styled";

const EditCardFooter = ({ category, onClick, onClearClick, onStartClick }) => {
  return (
    <FooterCardBar>
      <CategorySelect category={category} onClick={onClick}>
        <p>{category}</p>
        <ArrowIcon />
      </CategorySelect>
      <StartWrapper>
        <SaveIcon />
        <LineIcon />
        <ClearIconWrapper onClick={onClearClick} />
        <LineIcon />
        <DoneIcon onClick={onStartClick} />
      </StartWrapper>
    </FooterCardBar>
  );
};

export default EditCardFooter;