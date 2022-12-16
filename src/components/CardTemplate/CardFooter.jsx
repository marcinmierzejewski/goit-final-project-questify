import React from "react";
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import { ReactComponent as LineIcon } from "./images/Line.svg";
import { ReactComponent as DoneIcon } from "./images/done.svg";
import { ReactComponent as SaveIcon } from "./images/save.svg";
import {
  FooterCardBar,
  CategorySelect,
  StartWrapper,
  StartSpan,
  ClearIconWrapper,
} from "./CardFooter.styled";

const CardFooter = ({
  action,
  category,
  onClick,
  onClearClick,
  onStartClick,
}) => {
  return (
    <FooterCardBar>
      <CategorySelect category={category} onClick={onClick}>
        <p>{category}</p>
        <ArrowIcon />
      </CategorySelect>
      <StartWrapper>
        {(action === "Edit") && <SaveIcon />}
        <LineIcon />
        <ClearIconWrapper onClick={onClearClick} />
        <LineIcon />
        {action === "Edit" ? (
          <DoneIcon onClick={onStartClick} />
        ) : (
          <StartSpan onClick={onStartClick}>START</StartSpan>
        )}
      </StartWrapper>
    </FooterCardBar>
  );
};

export default CardFooter;
