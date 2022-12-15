import React from 'react';
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import { ReactComponent as StarIcon } from "./images/star.svg";
import { DifficultyBar, DifficultySelect } from './NewCardHeade.styled';

const NewCardHeader = ({onClick,difficulty})=> {
     return (
       <DifficultyBar>
         <DifficultySelect
           onClick={onClick}
           difficulty={difficulty}
         >
           <p>{difficulty}</p>
           <ArrowIcon />
         </DifficultySelect>

         <StarIcon />
       </DifficultyBar>
     );
}

export default NewCardHeader;