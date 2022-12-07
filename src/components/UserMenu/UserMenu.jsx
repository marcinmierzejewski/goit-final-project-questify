import trophy from './images/trophy.svg';
import {trophyCircle} from './UserMenu.styled'

export const UserMenu = () => {
  return (
    <div>
      <trophyCircle>
        <img src={trophy} alt="trophy" width='14'></img>
      </trophyCircle>
      <p>LogOut</p>
    </div>
  );
};