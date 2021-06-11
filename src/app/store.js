import { configureStore } from "@reduxjs/toolkit";
import holdingsReducer from "../features/slices/holdingsSlice";
import transactionsReducer from "../features/slices/transactionsSlice";

export default configureStore({
  reducer: {
    holdings: holdingsReducer,
    transactions: transactionsReducer,
  },
});
