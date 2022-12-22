import { Link, NoUserText } from "./AuthMenu.styled";

export const AuthMenu = () => {
  return (
    <div>
      <NoUserText>User are not authorization</NoUserText>{" "}
      {<Link to="/landing">Login</Link>}
    </div>
  );
};
