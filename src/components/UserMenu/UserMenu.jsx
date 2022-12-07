import trophy from './images/trophy.svg';
import {TrophyCircle} from './UserMenu.styled'

export const UserMenu = () => {
  return (
    <>
      <TrophyCircle>
        <img src={trophy} alt="trophy" width='14'></img>
      </TrophyCircle>
      <p>LogOut</p>
    </>
  );
};