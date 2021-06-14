import { configureStore } from "@reduxjs/toolkit";
import holdingsReducer from "../features/slices/holdingsSlice";
import transactionsReducer from "../features/slices/transactionsSlice";
import watchListReducer from "../features/slices/watchListSlice";

export default configureStore({
  reducer: {
    holdings: holdingsReducer,
    transactions: transactionsReducer,
    watchList: watchListReducer,
  },
});
