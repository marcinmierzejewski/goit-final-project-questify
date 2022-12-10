import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: 20px;
  padding: 0;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px 27px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 25px 28px;
  }
`;
