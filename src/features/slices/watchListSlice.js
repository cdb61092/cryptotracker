import { createSlice } from "@reduxjs/toolkit";

export const watchListSlice = createSlice({
  name: "watchList",
  initialState: ["bitcoin", "ethereum"],
  reducers: {
    addToWatchList: (state, action) => {
      state.push(action.payload);
    },
    removeFromWatchList: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
  },
  devTools: true,
});

export const selectWatchList = (state) => state.watchList;
export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
