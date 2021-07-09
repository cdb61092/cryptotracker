import Row from "./Row";
import * as S from "./Styles";

const Table = ({ columns, data }) => {
  const numCols = columns.length;
  return (
    <S.Table numCols={numCols}>
      {columns.map((column) => {
        return <S.Cell>{column.Header}</S.Cell>;
      })}
      {data.map((coin) => {
        return <Row data={coin} />;
      })}
    </S.Table>
  );
};

export default Table;
