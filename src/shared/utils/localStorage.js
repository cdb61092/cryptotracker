import { setHoldings } from "../../features/slices/holdingsSlice";
import { setTransactions } from "../../features/slices/transactionsSlice";
import { setWatchlist } from "../../features/slices/watchListSlice";

export const loadState = (dispatch) => {
  try {
    const serializedHoldings = localStorage.getItem("holdings");
    const serializedWatchlist = localStorage.getItem("watchlist");
    const serializedTransactions = localStorage.getItem("transactions");
    dispatch(setHoldings(JSON.parse(serializedHoldings)));
    dispatch(setWatchlist(JSON.parse(serializedWatchlist)));
    dispatch(setTransactions(JSON.parse(serializedTransactions)));
  } catch (err) {
    return undefined;
  }
};

export const saveState = (watchlist, holdings, transactions) => {
  console.log("saving state");
  try {
    localStorage.setItem(["holdings"], JSON.stringify(holdings));
    localStorage.setItem(["watchlist"], JSON.stringify(watchlist));
    localStorage.setItem(["transactions"], JSON.stringify(transactions));
  } catch (err) {
    //ignore error
  }
};
