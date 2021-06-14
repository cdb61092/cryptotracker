import styled from "styled-components";
import { Th, Td } from "../../../shared/Styles";
export { Th, Td };

export const RankingsTable = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
  & thead {
    font-size: 2rem;
    color: gray;
  }

  & td {
    font-size: 1.8rem;
    color: white;
    font-weight: 500;
  }
`;

export const SparklinesContainer = styled.div`
  width: 250px;
`;

export const Row = styled.tr``;
