import React from "react";
import styled from "styled-components";

const smallCurrency = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "usd",
  maximumFractionDigits: 2,
});
const largeCurrency = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "usd",
  maximumFractionDigits: 0,
});
const number = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function formatDate(date) {
  const newDate = new Date(date.substr(0, date.indexOf("T")));
  const formattedDate = newDate.toLocaleDateString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: 20px;
  width: 400px;
  float: right;
  position: absolute;
  right: 0;
  top: 50px;
`;

const DataColumn = styled.div`
  flex: 50%;
  text-align: right;
  span {
    font-weight: 600;
  }
`;

function MarketData(props) {
  return (
    <Wrapper>
      <DataColumn>
        <h4>Market Cap</h4>
        <p>{largeCurrency.format(props.data.market_cap.usd)}</p>
        <h4>Market Cap Rank</h4>
        <p>#{props.data.market_cap_rank}</p>
        <h4>24h Low / 24h High</h4>
        <p>
          {smallCurrency.format(props.data.low_24h.usd)} /{" "}
          {smallCurrency.format(props.data.high_24h.usd)}
        </p>
        <h4>All-time High</h4>
        <p>
          {smallCurrency.format(props.data.ath.usd)}{" "}
          <span
            style={
              props.data.ath_change_percentage.usd < 0
                ? { color: "red" }
                : { color: "green" }
            }
          >
            {props.data.ath_change_percentage.usd.toFixed(2)}%
          </span>
        </p>
        <p>{formatDate(props.data.ath_date.usd)}</p>
      </DataColumn>
      <DataColumn>
        <div>
          <h4>24 Hour Trading Vol</h4>
          <p>{largeCurrency.format(props.data.total_volume.usd)}</p>
          <h4>Circulating Supply</h4>
          <p>
            {number.format(props.data.circulating_supply) + " / "}
            {props.data.max_supply === null
              ? "Uncapped"
              : number.format(props.data.max_supply)}
          </p>
          {Object.keys(props.data.fully_diluted_valuation).length !== 0 ? (
            <div>
              <h4>Fully Diluted Valuation</h4>
              <p>
                {largeCurrency.format(props.data.fully_diluted_valuation.usd)}
              </p>
            </div>
          ) : null}
          <h4>All Time Low</h4>
          <p>
            {smallCurrency.format(props.data.atl.usd)}{" "}
            <span
              style={
                props.data.atl_change_percentage.usd < 0
                  ? { color: "red" }
                  : { color: "green" }
              }
            >
              {props.data.atl_change_percentage.usd.toFixed(2)}%
            </span>
          </p>
        </div>
      </DataColumn>
    </Wrapper>
  );
}

export default MarketData;
