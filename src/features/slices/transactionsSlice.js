import { createSlice } from "@reduxjs/toolkit";
import { BUY, SELL } from "../../shared/constants";

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: [
    {
      id: "lgcy-network",
      name: "LGCY Network",
      symbol: "LGCY",
      quantity: 11600000,
      totalCost: 2300,
      type: BUY,
      date: new Date().toString(),
    },
    {
      id: "lgcy-network",
      name: "LGCY Network",
      symbol: "LGCY",
      quantity: 500,
      totalCost: 500,
      type: BUY,
      date: new Date().toString(),
    },
    {
      id: "fsw-token",
      name: "Falconswap",
      symbol: "FSW",
      quantity: 20000,
      totalCost: 2400,
      type: BUY,
      date: new Date().toString(),
    },
    {
      id: "zoracles",
      name: "Zoracles",
      symbol: "ZORA",
      quantity: 7.89,
      totalCost: 1008,
      type: BUY,
      date: new Date().toString(),
    },
    {
      id: "unimex-network",
      name: "UniMex Network",
      symbol: "UMEX",
      quantity: 212,
      totalCost: 155,
      type: SELL,
      date: new Date().toString(),
    },
    {
      id: "trendering",
      name: "Trendering",
      symbol: "TRND",
      quantity: 200,
      totalCost: 810,
      type: BUY,
      date: new Date().toString(),
    },
  ],
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    },
    setTransactions: (state, action) => {
      return action.payload;
    },
  },
  devTools: true,
});

export const selectTransactions = (state) => state.transactions;
export const { addTransaction, setTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
