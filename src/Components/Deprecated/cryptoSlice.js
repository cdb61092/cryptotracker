import { createSlice } from "@reduxjs/toolkit";

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: [{ name: "bitcoin" }, { name: "ethereum" }, { name: "lgcy" }],
  reducers: {
    addCrypto: (state, action) => {
      state.push(action.payload);
    },
    removeCrypto: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
    setCrypto: (state, action) => {
      return action.payload;
    },
  },
  devTools: true,
});

export const selectCryptos = (state) => state.crypto;
export const { addCrypto, removeCrypto, setCrypto } = cryptoSlice.actions;

export default cryptoSlice.reducer;
