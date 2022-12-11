import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 290px));
  grid-auto-rows: 260px;
  gap: 20px;
  justify-content: center;
  padding: 0;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 205px));
    grid-auto-rows: 199px;
    gap: 25px 27px;
    justify-content: space-between;
  }
`;
