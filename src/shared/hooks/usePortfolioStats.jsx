import { useReducer, useEffect } from "react";

import useFetchHoldingsData from "./useFetchHoldingsData";
import {
  getPortfolioValue,
  getFiatInvested,
  get24hrDelta,
  get24hrChange,
  get7dChange,
  get7dDelta,
  get30dChange,
  get30dDelta,
  getROI,
} from "../utils/portfolioStats";

const initialState = {
  portfolioValue: 0,
  fiatInvested: 0,
  change24hrDelta: 0,
  change24hrDollarValue: 0,
  change7dDelta: 0,
  change7dDollarValue: 0,
  change30dDelta: 0,
  change30dDollarValue: 0,
  roi: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "calculatePortfolio":
      return {
        portfolioValue: action.payload.portfolioValue,
        fiatInvested: action.payload.fiatInvested,
        change24hrDelta: action.payload.change24hrDelta,
        change24hrDollarValue: action.payload.change24hrDollarValue,
        change7dDelta: action.payload.change7dDelta,
        change7dDollarValue: action.payload.change7dDollarValue,
        change30dDelta: action.payload.change30dDelta,
        change30dDollarValue: action.payload.change30dDollarValue,
        roi: action.payload.roi,
      };
    default:
      return initialState;
  }
}

const usePortfolioStats = () => {
  const { data, holdings } = useFetchHoldingsData();
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    portfolioValue,
    fiatInvested,
    change24hrDelta,
    change24hrDollarValue,
    change7dDelta,
    change7dDollarValue,
    change30dDelta,
    change30dDollarValue,
    roi,
  } = state;

  useEffect(() => {
    if (data) {
      dispatch({
        type: "calculatePortfolio",
        payload: {
          portfolioValue: getPortfolioValue(holdings, data),
          fiatInvested: getFiatInvested(holdings),
          change24hrDelta: get24hrDelta(holdings, data),
          change24hrDollarValue: get24hrChange(holdings, data),
          change7dDelta: get7dDelta(holdings, data),
          change7dDollarValue: get7dChange(holdings, data),
          change30dDelta: get30dDelta(holdings, data),
          change30dDollarValue: get30dChange(holdings, data),
          roi: getROI(portfolioValue, fiatInvested),
        },
      });
    }
  }, [holdings, data, portfolioValue, fiatInvested]);

  return [
    portfolioValue,
    fiatInvested,
    change24hrDelta,
    change24hrDollarValue,
    change7dDelta,
    change7dDollarValue,
    change30dDelta,
    change30dDollarValue,
    roi,
  ];
};

export default usePortfolioStats;
