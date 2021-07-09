import { useState } from "react";
import { useSelector } from "react-redux";
import { selectHoldings } from "../../../features/slices/holdingsSlice";
import { IoMdWallet } from "react-icons/io";
import useFetchHoldingsData from "../../../shared/hooks/useFetchHoldingsData";
import HoldingsRow from "./HoldingsRow";
import * as S from "./Styles";
import HomeSectionTitle from "../../../shared/components/HomeSectionTitle";
import CircleAddButton from "../../../shared/components/CircleAddButton";
import AddTransactionForm from "./AddTransactionForm";
import { BUY } from "../../../shared/constants";

const Holdings = () => {
  const holdings = useSelector(selectHoldings);
  const [showAddTransactionForm, setShowAddTransactionForm] = useState(false);
  const { data } = useFetchHoldingsData();
  const [transactionType, setTransactionType] = useState();

  const onShowForm = () => {
    setTransactionType(BUY);
    setShowAddTransactionForm(true);
  };

  return (
    <S.HomeGridContainer gridArea="midleft">
      {showAddTransactionForm && (
        <AddTransactionForm
          formTitle="Search for a coin"
          closeForm={() => setShowAddTransactionForm(false)}
          transactionType={transactionType}
        ></AddTransactionForm>
      )}
      <HomeSectionTitle
        icon={<IoMdWallet style={{ marginRight: "5px" }} />}
        title="Holdings"
      >
        <CircleAddButton
          size="30px"
          top="0"
          right="0"
          color="gray"
          onClick={onShowForm}
        />
      </HomeSectionTitle>
      <S.Table>
        <thead>
          <tr>
            <S.Th></S.Th>
            <S.Th textAlign="right">Amount</S.Th>
            <S.Th textAlign="right">Price</S.Th>
            <S.Th textAlign="right">Value</S.Th>
            <S.Th textAlign="center">24h</S.Th>
            <S.Th textAlign="center" width="120px">
              ROI
            </S.Th>
            <S.Th>Last 7 Days</S.Th>
            <S.Th></S.Th>
          </tr>
        </thead>
        <tbody style={{ color: "white" }}>
          {data &&
            holdings.map((holding) => {
              return (
                data.find((coin) => coin.id === holding.id) !== undefined && (
                  <HoldingsRow
                    key={holding.id}
                    holdingData={holding}
                    priceData={data.find((coin) => coin.id === holding.id)}
                  ></HoldingsRow>
                )
              );
            })}
        </tbody>
      </S.Table>
    </S.HomeGridContainer>
  );
};

export default Holdings;
