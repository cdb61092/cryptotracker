import { createSlice } from "@reduxjs/toolkit";

export const holdingsSlice = createSlice({
  name: "holdings",
  initialState: [
    {
      id: "lgcy-network",
      name: "LGCY Network",
      symbol: "LGCY",
      quantity: 11600000,
      totalCost: 2300,
    },
    {
      id: "fsw-token",
      name: "Falconswap",
      symbol: "FSW",
      quantity: 20000,
      totalCost: 2400,
    },
    {
      id: "zoracles",
      name: "Zoracles",
      symbol: "ZORA",
      quantity: Number(7.89),
      totalCost: 1008,
    },
    {
      id: "unimex-network",
      name: "UniMex Network",
      symbol: "UMEX",
      quantity: 212,
      totalCost: 155,
    },
    {
      id: "trendering",
      name: "Trendering",
      symbol: "TRND",
      quantity: 200,
      totalCost: 810,
    },
  ],
  reducers: {
    addToHoldings: (state, action) => {
      let previousState = state.find(
        (holding) => holding.id === action.payload.id
      );

      if (previousState) {
        previousState.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    removeFromHoldings: (state, action) => {
      let previousState = state.find(
        (holding) => holding.id === action.payload.id
      );
      previousState.quantity -= action.payload.quantity;
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
