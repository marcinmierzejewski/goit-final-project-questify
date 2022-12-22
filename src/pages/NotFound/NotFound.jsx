import { HomeLink, Main } from "./NotFound.styled";

const NotFound = () => {
  return (
    <Main>
      <h1>404</h1>
      <p>Sorry, we couldn't find that page :(</p>
      <p>
        If you want, you can go back to the{" "}
        <HomeLink to="/">main page</HomeLink>.
      </p>
    </Main>
  );
};

export default NotFound;
