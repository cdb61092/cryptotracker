import { useState, useReducer, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiSwitchHorizontal } from "react-icons/hi";
import CircleAddButton from "../../../shared/components/CircleAddButton";
import TransactionSection from "../../../shared/components/TransactionSection";
import styled from "styled-components";
import {
  addToHoldings,
  removeFromHoldings,
} from "../../../features/slices/holdingsSlice";
import { PRICE_PER, TOTAL_COST } from "../../../shared/hooks/useChangePayType";
import Modal from "../../../shared/components/Modal";
import SearchGeckoCoins from "../../SearchGeckoCoins";
import * as S from "./Styles";
import useChangePayType from "../../../shared/hooks/useChangePayType";
import useTransactionForm from "../../../shared/hooks/useTransactionForm";
import { GeckoSearchSubmitButton } from "./Styles";
import { BUY, SELL } from "../../../shared/constants";
import { addTransaction } from "../../../features/slices/transactionsSlice";

const UpdateHoldingForm = ({
  closeForm,
  transactionType,
  formTitle,
  id,
  name,
  symbol,
}) => {
  const [payType, togglePayType] = useChangePayType();
  const { quantity, totalCost, pricePerCoin, dispatch } = useTransactionForm();
  const holdingsDispatch = useDispatch();
  const transactionsDispatch = useDispatch();

  const onSubmit = () => {
    if (transactionType === BUY) {
      holdingsDispatch(
        addToHoldings({
          id: id,
          name: name,
          symbol: symbol.toUpperCase(),
          quantity: Number(quantity),
          totalCost: Number(totalCost),
        })
      );
      transactionsDispatch(
        addTransaction({
          id: id,
          name: name,
          symbol: symbol.toUpperCase(),
          quantity: Number(quantity),
          totalCost: Number(totalCost),
          type: transactionType,
          date: new Date(),
        })
      );
    }

    if (transactionType === SELL) {
      holdingsDispatch(
        removeFromHoldings({
          id: id,
          quantity: Number(quantity),
        })
      );
      transactionsDispatch(
        addTransaction({
          id: id,
          name: name,
          symbol: symbol.toUpperCase(),
          quantity: Number(quantity),
          totalCost: Number(totalCost),
          type: transactionType,
          date: new Date(),
        })
      );
    }
  };
  return (
    <Modal>
      <S.SearchPromptText>{formTitle}</S.SearchPromptText>
      <S.CloseButton onClick={() => closeForm()}>×</S.CloseButton>
      <TransactionTypeContainer>
        <Buy active={transactionType === BUY ? true : false}>Buy</Buy>
        <Sell active={transactionType === SELL ? true : false}>Sell</Sell>
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
        <CryptoTag>{symbol.toUpperCase()}</CryptoTag>
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
    </Modal>
  );
};

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

export default UpdateHoldingForm;
