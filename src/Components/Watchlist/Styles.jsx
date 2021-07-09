import styled from "styled-components";
import { Heading } from "../../shared/Styles";
export { Heading };

export const Watchlist = styled.div`
  min-height: 100%;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
`;
