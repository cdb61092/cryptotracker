import * as S from "./Styles";
import { formatMoney } from "../../../shared/utils/formatters";

const Transaction = ({ transactionData }) => {
  const { type, symbol, quantity, totalCost, date } = transactionData;
  return (
    <S.Tr>
      <S.Td color={type === "BUY" ? "green" : "red"} textAlign="left">
        {type}
      </S.Td>
      <S.Td textAlign="left">{symbol}</S.Td>
      <S.Td textAlign="right">{quantity.toLocaleString()}</S.Td>
      <S.Td textAlign="right">{formatMoney(totalCost / quantity)}</S.Td>
      <S.Td textAlign="right">{totalCost}</S.Td>
      <S.Td textAlign="right" width="230px">
        {new Date(date).toLocaleString()}
      </S.Td>
    </S.Tr>
  );
};

export default Transaction;
