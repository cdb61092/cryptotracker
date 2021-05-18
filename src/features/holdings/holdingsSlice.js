import { createSlice } from "@reduxjs/toolkit";

export const holdingsSlice = createSlice({
  name: "holdings",
  initialState: [
    {
      id: "lgcy-network",
      name: "LGCY Network",
      amount: 11600000,
      totalCost: 2300,
    },
    {
      id: "fsw-token",
      name: "Falconswap",
      amount: 20000,
      totalCost: 2400,
    },
    {
      id: "zoracles",
      name: "Zoracles",
      amount: 7.89,
      totalCost: 1008,
    },
    {
      id: "unimex-network",
      name: "UniMex Network",
      amount: 212,
      totalCost: 155,
    },
    {
      id: "trendering",
      name: "Trendering",
      amount: 200,
      totalCost: 810,
    },
  ],
  reducers: {
    addToHoldings: (state, action) => {
      state.push(action.payload);
    },
    removeFromHoldings: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
    setHoldings: (state, action) => {
      return action.payload;
    },
    updateHolding: (state, action) => {
      return (state = action.payload);
    },
  },
  devTools: true,
});

export const selectHoldings = (state) => state.holdings;
export const { addToHoldings, removeFromHoldings, setHoldings, updateHolding } =
  holdingsSlice.actions;

export default holdingsSlice.reducer;
