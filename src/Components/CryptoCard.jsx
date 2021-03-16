import React, { useEffect, useState } from "react";
import axios from "axios";
import PriceData from "./PriceData";
import MarketData from "./MarketData";
import styled from "styled-components";
import { formatName, formatLongName } from "../Util/formatters";
import { useDispatch } from "react-redux";
import { removeCrypto } from "../features/crypto/cryptoSlice";

const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  border: 1px solid black;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  position: relative;
  background-color: white;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
  font-weight: 600;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 5px;
  top: 3px;
  border: none;
  cursor: pointer;
  color: inherit;
  background: none;
  font-size: 1em;
  color: gray;
  outline: none;
`;

function CryptoCard(props) {
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    window.setTimeout(function () {
      const URL = `https://api.coingecko.com/api/v3/coins/${props.cryptoID}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
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
  }, [crypto, props.cryptoID]);

  return (
    <Wrapper>
      <CloseButton onClick={() => dispatch(removeCrypto(props.cryptoID))}>
        &#215;
      </CloseButton>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <CryptoIcon alt="crypto icon" src={crypto.image.small}></CryptoIcon>
          <CryptoName>
            {formatName(crypto.name, crypto.symbol).length < 14
              ? formatName(crypto.name, crypto.symbol)
              : formatLongName(crypto.name, crypto.symbol)}
          </CryptoName>
          <PriceData data={crypto.market_data}></PriceData>
          <MarketData data={crypto.market_data}></MarketData>
        </div>
      )}
    </Wrapper>
  );
}

export default CryptoCard;
