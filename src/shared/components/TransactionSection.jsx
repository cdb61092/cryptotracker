import { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { HiSwitchHorizontal } from "react-icons/hi";
import useChangePayType from "../hooks/useChangePayType";
import useTransactionForm from "../hooks/useTransactionForm";
import styled from "styled-components";
import { GeckoSearchSubmitButton } from "../Styles";
import { PRICE_PER, TOTAL_COST } from "../hooks/useChangePayType";
import SearchGeckoCoins from "../../Components/SearchGeckoCoins";
import {
  addToHoldings,
  removeFromHoldings,
} from "../../features/slices/holdingsSlice";

const TransactionTypeContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
`;

const TransactionType = styled.div`
  padding: 1rem;
  text-align: center;
  width: 50%;
  font-weight: ${(props) => (props.active ? "600" : "normal")};
  color: ${(props) => (props.active ? "white" : "gray")};
`;

const Buy = styled(TransactionType)`
  border-bottom: ${(props) =>
    props.active ? "3px solid var(--darker-green)" : "1px solid gray"};
`;

const Sell = styled(TransactionType)`
  border-bottom: ${(props) =>
    props.active ? "3px solid red" : "1px solid gray"};
`;

const TransactionSection = ({ transactionType }) => {
  const [payType, togglePayType] = useChangePayType();
  const { id, name, symbol, quantity, totalCost, pricePerCoin, dispatch } =
    useTransactionForm();
  const holdingsDispatch = useDispatch();

  const onResultSelect = (id, name, symbol) => {
    dispatch({
      type: "setCryptoInfo",
      payload: {
        id: id,
        name: name,
        symbol: symbol.toUpperCase(),
      },
    });
  };

  const onSubmit = () => {
    holdingsDispatch(
      addToHoldings({
        id: id,
        name: name,
        symbol: symbol,
        quantity: quantity,
        totalCost: totalCost,
      })
    );
  };

  return (
    <>
      <SearchGeckoCoins onResultSelect={onResultSelect} />
      <TransactionTypeContainer>
        <Buy active={transactionType === "buy" ? true : false}>Buy</Buy>
        <Sell active={transactionType === "sell" ? true : false}>Sell</Sell>
      </TransactionTypeContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px",
        }}
      >
        <Label htmlFor="pricePer">Price Per Coin</Label>
        <ChangePayTypeButton onClick={() => togglePayType()}>
          <HiSwitchHorizontal
            style={{
              color: "var(--darker-green)",
              position: "relative",
              top: "2px",
            }}
          />
          {payType === PRICE_PER ? "Total Cost" : "Price Per Coin"}
        </ChangePayTypeButton>
      </div>
      <Input
        type="number"
        value={pricePerCoin}
        disabled={payType === TOTAL_COST && "disabled"}
        autoComplete="off"
        onChange={(e) => {
          dispatch({
            type: "onInputChanged",
            payload: {
              pricePerCoin: e.target.value,
              quantity: quantity,
              totalCost: e.target.value * quantity,
            },
          });
        }}
      ></Input>
      <Label>Quantity</Label>
      <div>
        <Input
          type="number"
          autoComplete="off"
          value={quantity}
          onChange={(e) => {
            dispatch({
              type: "onQuantityChanged",
              payload: {
                quantity: e.target.value,
              },
            });
          }}
        ></Input>
        <CryptoTag>{symbol}</CryptoTag>
      </div>

      <Label>Total Cost</Label>
      <Input
        type="number"
        value={totalCost}
        disabled={payType === PRICE_PER && "disabled"}
        autoComplete="off"
        onChange={(e) => {
          dispatch({
            type: "onInputChanged",
            payload: {
              totalCost: e.target.value,
              quantity: quantity,
              pricePerCoin: e.target.value / quantity,
            },
          });
        }}
      ></Input>
      <GeckoSearchSubmitButton onClick={onSubmit}>
        Submit
      </GeckoSearchSubmitButton>
    </>
  );
};

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
`;
const ChangePayTypeButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  color: var(--darker-green);
  font-size: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  outline-color: lightgreen;
  border-radius: 5px;
  border: none;
  display: block;
  margin: 10px 0;
  padding-left: 15px;
  font-weight: 400;

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &:disabled {
    background-color: #a6a2a2;
  }
  &:disabled::-webkit-input-placeholder {
    color: white;
  }
`;

const CryptoTag = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  color: black;
  position: absolute;
  right: 15px;
  top: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export default TransactionSection;
