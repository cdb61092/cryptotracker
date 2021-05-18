import React from "react";
import styled from "styled-components";
import { formatMoney } from "../../Util/formatters";
import PercentageChange from "../PercentageChange";

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  position: absolute;
  top: 20px;
  right: 0px;
`;

const FlexCol = styled.div`
  flex: 25%;
`;

const DataHeader = styled.p`
  font-family: arial;
  font-size: 16px;
  font-weight: bold;
`;

const Price = styled.span`
  font-weight: 600;
`;

function PriceData({ crypto }) {
  const currentPrice = formatMoney(crypto.current_price.usd);
  const priceChangePercent24h = crypto.price_change_percentage_24h;
  const priceChangePercent7d = crypto.price_change_percentage_7d;
  const priceChangePercent30d = crypto.price_change_percentage_30d;
  return (
    <Wrapper>
      <FlexCol>
        <DataHeader>Price</DataHeader>
        <Price>{currentPrice}</Price>
      </FlexCol>
      <FlexCol>
        <DataHeader>1 Day</DataHeader>
        <PercentageChange percent={priceChangePercent24h}></PercentageChange>
      </FlexCol>
      <FlexCol>
        <DataHeader>1 Week</DataHeader>
        <PercentageChange percent={priceChangePercent7d}></PercentageChange>
      </FlexCol>
      <FlexCol>
        <DataHeader>1 Month</DataHeader>
        <PercentageChange percent={priceChangePercent30d}></PercentageChange>
      </FlexCol>
    </Wrapper>
  );
}

export default PriceData;
