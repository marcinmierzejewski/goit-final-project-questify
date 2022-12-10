import { UserDiv, UserInitial, UserText } from "./UserName.styled";
import { useSelector } from "react-redux";

export const UserName = () => {
  const user = useSelector((state) => state.user);
  const userDisplay = user.email || "Guest";

  return (
    <UserDiv>
      <UserInitial>{userDisplay[0]}</UserInitial>
      <UserText>{userDisplay} Quest Log</UserText>
    </UserDiv>
  );
};
