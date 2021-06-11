import { current } from "immer";

export const matchGeckoDataToHolding = (holding, data) => {
  return data.find((coin) => coin.id === holding.id);
};

export const matchHoldingDataToGecko = (data, holding) => {
  return holding.find((holding) => holding.id === data.id);
};

export const reversePercentage = (finalNum, percent) => {
  return (finalNum * 100) / (percent + 100);
};

export const getPortfolioValue = (holdings, data) => {
  // const marketData = data.find(coin => coin.id === data.id)
  const value = holdings
    .map((holding) => {
      const marketData = matchGeckoDataToHolding(holding, data);
      if (marketData !== undefined) {
        return holding.quantity * marketData.current_price;
      }
      return 0;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  return value.toFixed(2);
};

export const eachHoldingHasMarketData = (holdings, data) => {
  const marketIds = data.map((datum) => {
    return datum.id;
  });

  return holdings.every((holding) => {
    return marketIds.includes(holding.id);
  });
};

export const getFiatInvested = (holdings) => {
  const totalInvested = holdings
    .map((holding) => {
      return holding.totalCost;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  return totalInvested;
};

export const get24hrChange = (holdings, data) => {
  const currentPortfolioValue = getPortfolioValue(holdings, data);
  return (
    currentPortfolioValue -
    holdings
      .map((holding) => {
        const marketData = matchGeckoDataToHolding(holding, data);
        if (marketData) {
          return (
            holding.quantity *
            reversePercentage(
              marketData.current_price,
              marketData.price_change_percentage_24h
            )
          );
        }
        return 0;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      })
  ).toFixed(2);
};

export const get24hrDelta = (holdings, data) => {
  const currentPortfolioValue = getPortfolioValue(holdings, data);

  const change24hrValue = holdings
    .map((holding) => {
      const marketData = matchGeckoDataToHolding(holding, data);
      if (marketData) {
        return (
          holding.quantity *
          reversePercentage(
            marketData.current_price,
            marketData.price_change_percentage_24h
          )
        );
      }
      return 0;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    });

  return (
    ((currentPortfolioValue - change24hrValue) / change24hrValue) *
    100
  ).toFixed(2);
};

export const get7dChange = (holdings, data) => {
  const currentPortfolioValue = getPortfolioValue(holdings, data);
  return (
    currentPortfolioValue -
    holdings
      .map((holding) => {
        const marketData = matchGeckoDataToHolding(holding, data);
        if (marketData) {
          return (
            holding.quantity *
            reversePercentage(
              marketData.current_price,
              marketData.price_change_percentage_7d_in_currency
            )
          );
        }
        return 0;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      })
  ).toFixed(2);
};

export const get7dDelta = (holdings, data) => {
  const currentPortfolioValue = getPortfolioValue(holdings, data);

  const change7dValue = holdings
    .map((holding) => {
      const marketData = matchGeckoDataToHolding(holding, data);
      if (marketData) {
        return (
          holding.quantity *
          reversePercentage(
            marketData.current_price,
            marketData.price_change_percentage_7d_in_currency
          )
        );
      }
      return 0;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    });

  return (
    ((currentPortfolioValue - change7dValue) / change7dValue) *
    100
  ).toFixed(2);
};

export const get30dChange = (holdings, data) => {
  const currentPortfolioValue = getPortfolioValue(holdings, data);
  return (
    currentPortfolioValue -
    holdings
      .map((holding) => {
        const marketData = matchGeckoDataToHolding(holding, data);
        if (marketData) {
          return (
            holding.quantity *
            reversePercentage(
              marketData.current_price,
              marketData.price_change_percentage_30d_in_currency
            )
          );
        }
        return 0;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      })
  ).toFixed(2);
};

export const get30dDelta = (holdings, data) => {
  const currentPortfolioValue = getPortfolioValue(holdings, data);

  const change30dValue = holdings
    .map((holding) => {
      const marketData = matchGeckoDataToHolding(holding, data);
      if (marketData) {
        return (
          holding.quantity *
          reversePercentage(
            marketData.current_price,
            marketData.price_change_percentage_30d_in_currency
          )
        );
      }
      return 0;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    });
  return (
    ((currentPortfolioValue - change30dValue) / change30dValue) *
    100
  ).toFixed(2);
};

export const getROI = (portfolioValue, fiatInvested) => {
  return (((portfolioValue - fiatInvested) / fiatInvested) * 100).toFixed(2);
};
