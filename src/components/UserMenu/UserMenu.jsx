import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteToken } from "../../redux/slices/tokenSlice";
import { deleteUser, challengeToggle } from "../../redux/slices/userSlice";
import Cookies from "js-cookie";
import { useLogoutMutation } from "../../redux/slices/questifyAPI";
import { TrophyActive, UserMenuWrapper, LogOutBtn } from "./UserMenu.styled";
import { ReactComponent as LogoutIcon } from "./images/logout.svg";
import { ReactComponent as TrophyIcon } from "./images/trophy.svg";


export const UserMenu = () => {
  const user = useSelector((state) => state.user);
  const challengeState = useSelector((state) => state.user.challengeFIlter)

  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleChallenge =  () => {
     dispatch(challengeToggle());
  }

  const logoutUser = async () => {
    await Cookies.remove("token");
    await logout().then(() => {
      dispatch(deleteToken());
      dispatch(deleteUser());
    });
    await navigate("/");
  };

  return (
    <UserMenuWrapper>
      <TrophyActive onClick={toggleChallenge} isActive={challengeState}>
        <TrophyIcon />
      </TrophyActive>
      {user.email && (
        <LogOutBtn onClick={logoutUser}>
          <LogoutIcon />
        </LogOutBtn>
      )}
    </UserMenuWrapper>
  );
};
