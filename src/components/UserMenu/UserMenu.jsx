import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteToken } from "../../redux/slices/tokenSlice";
import { deleteUser } from "../../redux/slices/userSlice";
import Cookies from "js-cookie";
import { useLogoutMutation } from "../../redux/slices/questifyAPI";
import { TrophyActive, UserMenuWrapper, LogOutBtn } from "./UserMenu.styled";
import { ReactComponent as LogoutIcon } from "./images/logout.svg";
import { ReactComponent as TrophyIcon } from "./images/trophy.svg";
import { useState } from "react";

export const UserMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(isActive => !isActive);

  const user = useSelector((state) => state.user);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <TrophyActive onClick={toggle} isActive={isActive}>
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
