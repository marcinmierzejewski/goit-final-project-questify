import React from "react";
import Card from "./Card";
import { List } from "./CardList.styled";

const CardList = ({ groupName, filterCardsByGroup, cardPreparation }) => {
  return (
    <List>
      {cardPreparation}
      {filterCardsByGroup(groupName).map((c) => (
        <Card key={c._id} {...c} />
      ))}
    </List>
  );
};

export default CardList;
