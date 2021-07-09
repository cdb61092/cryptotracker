import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.numCols}, 1fr);
`;

export const HeaderRow = styled.div``;

export const Cell = styled.div``;
