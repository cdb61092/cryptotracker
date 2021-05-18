import { configureStore } from "@reduxjs/toolkit";
import holdingsReducer from "../features/holdings/holdingsSlice";

export default configureStore({
  reducer: {
    holdings: holdingsReducer,
  },
});
