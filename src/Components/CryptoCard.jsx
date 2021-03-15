import React, { useEffect, useState } from "react";
import axios from "axios";
import PriceData from "./PriceData";
import MarketData from "./MarketData";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  border: 1px solid black;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  position: relative;
  pointer-events: none;
  background-color: white;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: red;
  }
`;

const CryptoIcon = styled.img`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 60px;
`;

const CryptoName = styled.h1`
  position: absolute;
  left: 70px;
  top: 10px;
`;

function CryptoCard(props) {
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);
  const cryptoID = props.cryptoID;

  function formatName() {
    return `${crypto.name} (${crypto.symbol.toUpperCase()})`;
  }

  useEffect(() => {
    window.setTimeout(function () {
      const URL = `https://api.coingecko.com/api/v3/coins/${cryptoID}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
      axios
        .get(URL)
        .then((res) => {
          setCrypto(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 10000);
  }, [crypto, cryptoID]);

  return (
    <Wrapper>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <CryptoIcon alt="crypto icon" src={crypto.image.small}></CryptoIcon>
          <CryptoName>{formatName()}</CryptoName>
          <PriceData data={crypto.market_data}></PriceData>
          <MarketData data={crypto.market_data}></MarketData>
        </div>
      )}
    </Wrapper>
  );
}

export default CryptoCard;
