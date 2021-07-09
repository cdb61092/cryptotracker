import React, { useState } from "react";
import PercentageChange from "../../../shared/components/PercentageChange";
import { formatMoney, formatNumber } from "../../../shared/utils/formatters";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Icon } from "./Styles";
import IconButton from "../../../shared/components/IconButton";
import * as S from "../../../shared/Styles";
import { FaPlus, FaMinus } from "react-icons/fa";
import UpdateHoldingForm from "./UpdateHoldingForm";
import { BUY, SELL } from "../../../shared/constants";
import { DollarValue } from "../PortfolioSummaryBar/Styles";

function HoldingsRow({ holdingData, priceData }) {
  const {
    id,
    name,
    symbol,
    image,
    current_price,
    price_change_percentage_24h,
  } = priceData;
  const [showUpdateHoldingsForm, setShowUpdateHoldingsForm] = useState(false);
  const [transactionType, setTransactionType] = useState();
  const { quantity, totalCost } = holdingData;

  const addToHolding = () => {
    setTransactionType(BUY);
    setShowUpdateHoldingsForm(true);
  };

  const sellHolding = () => {
    setTransactionType(SELL);
    setShowUpdateHoldingsForm(true);
  };

  return (
    <S.Tr>
      {showUpdateHoldingsForm && (
        <UpdateHoldingForm
          id={id}
          name={name}
          symbol={symbol}
          closeForm={() => setShowUpdateHoldingsForm(false)}
          transactionType={transactionType}
          formTitle={
            transactionType === BUY
              ? `Buying additional ${symbol.toUpperCase()}`
              : `Selling ${symbol.toUpperCase()}`
          }
        ></UpdateHoldingForm>
      )}

      <S.Td textAlign="left">
        <Icon src={image} alt="crypto"></Icon>
        {symbol.toUpperCase()}
      </S.Td>
      <S.Td textAlign="right">{formatNumber(quantity)}</S.Td>
      <S.Td textAlign="right">{formatMoney(current_price)}</S.Td>
      <S.Td textAlign="right">{formatMoney(quantity * current_price)}</S.Td>
      <S.Td textAlign="center">
        <PercentageChange percent={price_change_percentage_24h} />
      </S.Td>
      <S.Td textAlign="center">
        <PercentageChange
          percent={((quantity * current_price) / totalCost) * 100}
        />
      </S.Td>
      <S.Td width="150px">
        <Sparklines
          data={priceData.sparkline_in_7d.price}
          width={150}
          height={40}
        >
          <SparklinesLine
            color={
              priceData.sparkline_in_7d.price[0] <
              priceData.sparkline_in_7d.price[
                priceData.sparkline_in_7d.length - 1
              ]
                ? "var(--light-green)"
                : "var(--light-red"
            }
          ></SparklinesLine>
        </Sparklines>
      </S.Td>
      <S.Td textAlign="right">
        <IconButton
          icon={<FaPlus size="10px" />}
          hoverColor="green"
          onClick={addToHolding}
        />
      </S.Td>
      <S.Td textAlign="right">
        <IconButton
          icon={<FaMinus size="10px" />}
          hoverColor="red"
          onClick={sellHolding}
        />
      </S.Td>
    </S.Tr>
  );
}

export default HoldingsRow;
