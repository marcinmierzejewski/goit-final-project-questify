import { Header, Container } from "./AppBar.styled";
import { Home } from "../Home/Home";
import { UserName } from "../UserName/UserName";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthMenu } from "../AuthMenu/AuthMenu";

const AppBar = () => {
  const isLoggedIn = true; // do podciągnięcia bool z auth

  return (
    <Header>
      <Container>
        <Home />
        {isLoggedIn && <UserName />}
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </Container>
    </Header>
  );
};

export default AppBar;
