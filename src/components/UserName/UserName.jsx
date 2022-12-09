import { UserDiv, UserInitial, UserText } from "./UserName.styled";

export const UserName = () => {

  const user = {name: "John"} // user getting from authorization
  
  return (
    <UserDiv>
      <UserInitial>{user.name[0]}</UserInitial>
      <UserText>{user.name} Quest Log</UserText>
    </UserDiv>
  );
};