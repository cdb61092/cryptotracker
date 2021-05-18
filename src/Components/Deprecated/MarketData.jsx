import React from "react";
import styled from "styled-components";
import { formatDate, formatMoney } from "../../Util/formatters";
import PercentageChange from "../PercentageChange";

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: 20px;
  width: 300px;
  float: right;
  position: absolute;
  right: 0;
  top: 50px;
`;

const DataColumn = styled.div`
  flex: 40%;
  text-align: right;
  span {
    font-weight: 600;
  }
  & h4 {
    font-size: 14px;
  }
  & p {
    font-size: 12px;
  }
`;

const ColLeft = styled.div`
  flex: 30%;
  text-align: right;
  span {
    font-weight: 600;
  }
  & h4 {
    font-size: 14px;
  }
  & p {
    font-size: 12px;
  }
`;

function MarketData({ crypto }) {
  const marketCap = formatMoney(crypto.market_cap.usd);
  const marketCapRank = crypto.market_cap_rank;
  const low24hr = formatMoney(crypto.low_24h.usd);
  const high24hr = formatMoney(crypto.high_24h.usd);
  const allTimeHigh = formatMoney(crypto.ath.usd);
  const allTimeHighChangePercentage = crypto.ath_change_percentage.usd;
  const allTimeHighDate = formatDate(crypto.ath_date.usd);
  const allTimeLow = formatMoney(crypto.atl.usd);
  const allTimeLowChangePercentage = crypto.atl_change_percentage.usd;
  const allTimeLowDate = formatDate(crypto.atl_date.usd);
  const volume = formatMoney(crypto.total_volume.usd);
  const circulatingSupply = crypto.circulating_supply.toLocaleString();
  let maxSupply =
    crypto.max_supply !== null
      ? crypto.max_supply.toLocaleString()
      : "Uncapped";
  const fullyDilutedValuation =
    Object.keys(crypto.fully_diluted_valuation).length > 0
      ? formatMoney(crypto.fully_diluted_valuation.usd)
      : "N/A";
  return (
    <Wrapper>
      <ColLeft>
        <h4>Market Cap</h4>
        <p>{marketCap}</p>
        <h4>Market Cap Rank</h4>
        <p>#{marketCapRank}</p>
        <h4>24h Low / 24h High</h4>
        <p>
          {low24hr} / {high24hr}
        </p>
        <h4>All-time High</h4>
        <p>
          {allTimeHigh}{" "}
          <PercentageChange
            percent={allTimeHighChangePercentage}
          ></PercentageChange>
        </p>
        <p>{allTimeHighDate}</p>
      </ColLeft>
      <DataColumn>
        <div>
          <h4>24 Hour Trading Vol</h4>
          <p>{volume}</p>
          <h4>Circulating Supply</h4>
          <p>
            {circulatingSupply} / {maxSupply}
          </p>
          <h4>Fully Diluted Valuation</h4>
          <p>{fullyDilutedValuation}</p>
          <h4>All Time Low</h4>
          <p>
            {allTimeLow}{" "}
            <PercentageChange
              percent={allTimeLowChangePercentage}
            ></PercentageChange>
          </p>
          <p>{allTimeLowDate}</p>
        </div>
      </DataColumn>
    </Wrapper>
  );
}

export default MarketData;
