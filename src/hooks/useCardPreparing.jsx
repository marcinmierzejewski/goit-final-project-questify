import { useState } from "react";

export const useCardPreparing = (initialValue = false) => {
  const [isCardInPreparation, setIsCardInPreparation] = useState(initialValue);
  const preparingCardToCreate = () => setIsCardInPreparation(true);
  const cancelingCardToPreparing = () => setIsCardInPreparation(false);

  return { isCardInPreparation, preparingCardToCreate, cancelingCardToPreparing };
};
