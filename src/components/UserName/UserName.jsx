import { UserDiv, UserInitial } from "./UserName.styled";

export const UserName = () => {

  const user = {name: "John"} // user from authorization
  
  return (
    <UserDiv>
      <UserInitial>{user.name[0]}</UserInitial>
      <p>{user.name} Quest Log</p>
    </UserDiv>
  );
};