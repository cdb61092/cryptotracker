import { useState } from "react";
import { useQuery } from "react-query";

const useFetchRankings = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const fetchRankings = (page) =>
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    ).then((res) => res.json());

  const { isLoading, isFetching, isError, isPreviousData, data } = useQuery(
    ["rankings", pageNumber],
    () => fetchRankings(pageNumber),
    {
      keepPreviousData: true,
      refetchInterval: 10000,
    }
  );

  return [
    isLoading,
    isFetching,
    isError,
    isPreviousData,
    data,
    pageNumber,
    setPageNumber,
  ];
};

export default useFetchRankings;
