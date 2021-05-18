import React, { useReducer, useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { selectHoldings } from "../../features/holdings/holdingsSlice";

import {
  Container,
  Section,
  MidSection,
  Header,
  DollarValue,
  DeltaValue,
} from "./Styles";

const initialState = {
  portfolioValue: undefined,
  fiatInvested: undefined,
  change24hr: undefined,
  change7d: undefined,
  change30d: undefined,
  roi: undefined,
};

function reducer(state, action) {
  switch (action.type) {
    case "calculatePortfolio":
      return {
        portfolioValue: action.payload.portfolioValue,
        fiatInvested: action.payload.fiatInvested,
        change24hr: action.payload.change24hr,
        change7d: action.payload.change7d,
        change30d: action.payload.change30d,
        roi: action.payload.roi,
      };
    default:
      return initialState;
  }
}

const PortfolioSummaryBar = ({ loading }) => {
  const holdings = useSelector(selectHoldings);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { portfolioValue, fiatInvested, change24hr, change7d, change30d, roi } =
    state;
  // const loading = useGeckoAPI();
  const [dchange, setdchange] = useState();

  const getPortfolioValue = useCallback(() => {
    const value = holdings
      .map((holding) => {
        return holding.amount * holding.currentPrice;
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(value);
    return value.toFixed(2);
  }, [holdings]);

  const getFiatInvested = useCallback(() => {
    const totalInvested = holdings
      .map((holding) => {
        return holding.totalCost;
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    return totalInvested;
  }, [holdings]);

  const getROI = useCallback(() => {
    return (((portfolioValue - fiatInvested) / fiatInvested) * 100).toFixed(2);
  }, [portfolioValue, fiatInvested]);

  const get1DChange = useCallback(() => {
    const data = holdings.map((holding) => {
      const percentChange = holding.change1D;
      const originalPercent = (100 + percentChange) / 100;
      return {
        asset: holding.id,
        previousPrice: holding.currentPrice / originalPercent,
      };
    });
    setdchange(data);
  }, [holdings]);

  useEffect(() => {
    if (!loading) {
      dispatch({
        type: "calculatePortfolio",
        payload: {
          portfolioValue: getPortfolioValue(),
          fiatInvested: getFiatInvested(),
          change24hr: get1DChange(),
          change7d: undefined,
          change30d: undefined,
          roi: getROI(),
        },
      });
    }
  }, [getPortfolioValue, getFiatInvested, loading, getROI, get1DChange]);

  return (
    !loading && (
      <Container>
        <Section centered>
          <Header>Portfolio Value</Header>
          <DollarValue>${portfolioValue}</DollarValue>
        </Section>
        <MidSection>
          <Section centered>
            <Header>24h</Header>
            <DeltaValue>+10% ($5,785)</DeltaValue>
          </Section>{" "}
          <Section centered>
            <Header>7d</Header>
            <DeltaValue>+15% ($10,785)</DeltaValue>
          </Section>
          <Section centered>
            <Header>30d</Header>
            <DeltaValue>+24.3% ($24,785)</DeltaValue>
          </Section>
        </MidSection>
        <Section>
          <Header>Fiat Invested</Header>
          <DollarValue>${fiatInvested}</DollarValue>
        </Section>
        <Section centered>
          <Header>Return on Investment</Header>
          <DeltaValue>{roi}%</DeltaValue>
        </Section>
      </Container>
    )
  );
};

export default PortfolioSummaryBar;
