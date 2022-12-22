import React from "react";
import { Main } from "./MainSection.styled";

const MainSection = (props) => {
  return <Main>{props.children}</Main>;
};

export default MainSection;
