import { useSelector, useDispatch } from "react-redux";
import { selectHoldings } from "../../features/slices/holdingsSlice";
import { selectWatchList } from "../../features/slices/watchListSlice";
import { selectTransactions } from "../../features/slices/transactionsSlice";
import { useCallback, useEffect } from "react";
import { setHoldings } from "../../features/slices/holdingsSlice";
import { setTransactions } from "../../features/slices/transactionsSlice";
import { setWatchlist } from "../../features/slices/watchListSlice";
import { loadState, saveState } from "../utils/localStorage";

const usePersistReduxState = () => {
  const dispatch = useDispatch();
  const holdings = useSelector(selectHoldings);
  const transactions = useSelector(selectTransactions);
  const watchlist = useSelector(selectWatchList);

  useEffect(() => {
    loadState(dispatch);
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener(
      "beforeunload",
      saveState(watchlist, holdings, transactions)
    );

    return () => {
      console.log("cleanup");
      window.removeEventListener(
        "beforeunload",
        saveState(watchlist, holdings, transactions)
      );
    };
  }, [watchlist, holdings, transactions]);
};

export default usePersistReduxState;
