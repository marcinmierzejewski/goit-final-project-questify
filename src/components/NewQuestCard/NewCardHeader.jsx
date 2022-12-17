import React from 'react';
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import { ReactComponent as StarIcon } from "./images/star.svg";
import { DifficultyBar, DifficultySelect, IconConteiner, StarContainer, TrophyContainer } from './NewCardHeade.styled';
import { ReactComponent as TrophyIcon } from "./images/trophy.svg";

const NewCardHeader = ({ onClickDif, difficulty, onClickNormal, onClickChallenge, cardStateNormal}) => {
     return (
       <DifficultyBar>
         <DifficultySelect
           onClick={onClickDif}
           difficulty={difficulty}
         >
           <p>{difficulty}</p>
           <ArrowIcon />
         </DifficultySelect>
         <IconConteiner>
           <StarContainer cardtype={cardStateNormal}>
             <StarIcon onClick={onClickNormal}/>
           </StarContainer>
           <TrophyContainer cardtypes={cardStateNormal}>
             <TrophyIcon onClick={onClickChallenge}/>
           </TrophyContainer>
         </IconConteiner>
       </DifficultyBar>
     );
}

export default NewCardHeader;