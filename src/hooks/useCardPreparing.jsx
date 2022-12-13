import { useState } from "react";

export const useCardPreparing = () => {
  const [isCardInPreparation, setIsCardInPreparation] = useState(false);
  const preparingCardToCreate = () => setIsCardInPreparation(true);
  const cancelingCardToPreparing = () => setIsCardInPreparation(false);

  return { isCardInPreparation, preparingCardToCreate, cancelingCardToPreparing };
};
