import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWatchList,
  addToWatchList as add,
  removeFromWatchList as remove,
} from "../../features/slices/watchListSlice";
const useFetchWatchList = () => {
  const ids = useSelector(selectWatchList);
  const dispatch = useDispatch();
  const API_PARAMS = ids.join();
  const { isLoading, isError, data } = useQuery(
    ["watchList", API_PARAMS],
    () =>
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${API_PARAMS}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C1y`
      ).then((res) => res.json()),
    {
      refetchInterval: 10000,
      refetchOnWindowFocus: false,
    }
  );

  const addToWatchList = (coinId) => {
    dispatch(add(coinId));
  };

  const removeFromWatchList = (coinId) => {
    dispatch(remove(coinId));
  };

  return { isLoading, isError, data, addToWatchList, removeFromWatchList, ids };
};

export default useFetchWatchList;
