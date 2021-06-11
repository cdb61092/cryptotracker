import { useQuery } from "react-query";

const useFetchWatchList = (ids) => {
  const API_PARAMS = ids.join();
  const { isLoading, isError, data, error, refetch } = useQuery(
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
  return { isLoading, isError, data, error, refetch };
};

export default useFetchWatchList;
