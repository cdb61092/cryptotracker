import React, { useReducer, useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { selectHoldings } from "../../../features/slices/holdingsSlice";
import { formatPercent } from "../../../shared/utils/formatters";
import PercentageChange from "../../../shared/components/PercentageChange";
import DollarValueChange from "../../../shared/components/DollarValueChange";
import usePortfolioStats from "../../../shared/hooks/usePortfolioStats";

import * as S from "./Styles";

const PortfolioSummaryBar = () => {
  const [
    portfolioValue,
    fiatInvested,
    change24hrDelta,
    change24hrDollarValue,
    change7dDelta,
    change7dDollarValue,
    change30dDelta,
    change30dDollarValue,
    roi,
  ] = usePortfolioStats();

  return (
    <S.Container>
      <S.Section centered>
        <S.Header>Portfolio Value</S.Header>
        <S.DollarValue>${portfolioValue}</S.DollarValue>
      </S.Section>
      <S.MidSection>
        <S.Section centered>
          <S.Header>24h</S.Header>
          <S.ChangeWrapper>
            <PercentageChange percent={change24hrDelta} />
            <DollarValueChange value={change24hrDollarValue} />
          </S.ChangeWrapper>
        </S.Section>
        <S.Section centered>
          <S.Header>7d</S.Header>
          <S.ChangeWrapper>
            <PercentageChange percent={change7dDelta} />
            <DollarValueChange value={change7dDollarValue} />
          </S.ChangeWrapper>
        </S.Section>
        <S.Section centered>
          <S.Header>30d</S.Header>
          <S.ChangeWrapper>
            <PercentageChange percent={change30dDelta} />
            <DollarValueChange value={change30dDollarValue} />
          </S.ChangeWrapper>
        </S.Section>
      </S.MidSection>
      <S.Section>
        <S.Header>Fiat Invested</S.Header>
        <S.DollarValue>${fiatInvested}</S.DollarValue>
      </S.Section>
      <S.Section centered>
        <S.Header>Return on Investment</S.Header>
        <S.ChangeWrapper>
          <PercentageChange percent={roi} />
          <DollarValueChange value={((roi / 100) * fiatInvested).toFixed(2)} />
        </S.ChangeWrapper>
      </S.Section>
    </S.Container>
  );
};

export default PortfolioSummaryBar;
