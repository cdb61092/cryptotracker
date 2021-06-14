import * as S from "./Styles";
import { AiOutlineSwap } from "react-icons/ai";
import HomeSectionTitle from "../../../shared/components/HomeSectionTitle";
import { selectTransactions } from "../../../features/slices/transactionsSlice";
import { useSelector } from "react-redux";
import Transaction from "./Transaction";

const Transactions = () => {
  const transactions = useSelector(selectTransactions);
  return (
    <S.HomeGridContainer>
      <HomeSectionTitle
        icon={<AiOutlineSwap style={{ marginRight: "5px" }} />}
        title="Transactions"
        color="gray"
      ></HomeSectionTitle>

      <S.Table>
        <thead>
          <tr>
            <S.Th textAlign="left" width="75px">
              Type
            </S.Th>
            <S.Th textAlign="left">Coin</S.Th>
            <S.Th textAlign="right">Amount</S.Th>
            <S.Th textAlign="right">Price per</S.Th>
            <S.Th textAlign="right">Total Cost</S.Th>
            <S.Th>Date</S.Th>
          </tr>
        </thead>

        <tbody>
          {[...transactions].reverse().map((transaction) => {
            return <Transaction transactionData={transaction}></Transaction>;
          })}
        </tbody>
      </S.Table>
    </S.HomeGridContainer>
  );
};

export default Transactions;
