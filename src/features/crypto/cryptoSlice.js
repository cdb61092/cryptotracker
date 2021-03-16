import { createSlice } from "@reduxjs/toolkit";

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: ["bitcoin"],
  reducers: {
    addCrypto: (state, action) => {
      state.push(action.payload);
    },
    removeCrypto: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
  },
  devTools: true,
});

export const selectCryptos = (state) => state.crypto;
export const { addCrypto, removeCrypto } = cryptoSlice.actions;

export default cryptoSlice.reducer;
