import { useState, useReducer } from "react";

const initialState = {
  id: "",
  name: "",
  symbol: "",
  transactionType: "",
  quantity: Number(1),
  totalCost: Number(1),
  pricePerCoin: Number(1),
};

function reducer(state, action) {
  switch (action.type) {
    case "selectCrypto":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        symbol: action.payload.symbol,
      };
    case "setCryptoInfo":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        symbol: action.payload.symbol,
      };
    case "onInputChanged":
      return {
        ...state,
        pricePerCoin: action.payload.pricePerCoin,
        quantity: action.payload.quantity,
        totalCost: action.payload.totalCost,
      };
    case "onQuantityChanged":
      return {
        ...state,
        quantity: action.payload.quantity,
        totalCost: state.quantity * state.pricePerCoin,
      };
    default:
      return initialState;
  }
}

const useTransactionForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    id,
    name,
    symbol,
    quantity,
    totalCost,
    pricePerCoin,
    transactionType,
  } = state;

  return {
    id,
    name,
    symbol,
    quantity,
    totalCost,
    pricePerCoin,
    transactionType,
    dispatch,
  };
};

export default useTransactionForm;
