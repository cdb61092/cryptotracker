import { useState } from "react";
import { useQuery } from "react-query";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { formatPercent } from "../../../shared/utils/formatters";
import PercentageChange from "../../../shared/components/PercentageChange";
import DollarValue from "../../../shared/components/DollarValue";
import CryptoIcon from "../../../shared/components/CryptoIcon";
import CryptoName from "../../../shared/components/CryptoName";
import AddToWatchListButton from "../AddToWatchListButton";
import * as S from "./Styles";
import useWatchListIds from "../../../shared/hooks/useWatchListIds";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import IconButton from "../../../shared/components/IconButton";
import Pagination from "../../../shared/components/Pagination";

const RankingsTable = () => {
  const [page, setPage] = useState(1);
  const [ids, addToWatchList, removeFromWatchList] = useWatchListIds();
  console.log(ids);
  const fetchRankings = (page = 1) =>
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    ).then((res) => res.json());

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(["rankings", page], () => fetchRankings(page), {
      keepPreviousData: true,
      refetchInterval: 10000,
    });

  const getButtonStyle = (coinId) => {
    let filled = false;
    const matched = ids.find((id) => id === coinId);
    if (matched !== undefined) {
      filled = true;
    }
    return filled;
  };

  if (isLoading) return null;
  if (isError) return null;
  return (
    <S.RankingsTable>
      <Pagination page={page} setPage={setPage} />

      <S.Table>
        <thead>
          <tr>
            <S.Th></S.Th>
            <S.Th textAlign="center">#</S.Th>
            <S.Th textAlign="left">Coin</S.Th>
            <S.Th>Price</S.Th>
            <S.Th>1h</S.Th>
            <S.Th>24h</S.Th>
            <S.Th>7d</S.Th>
            <S.Th>Market Cap</S.Th>
            <S.Th>24h Volume</S.Th>
            <S.Th width="300px">Last 7 Days</S.Th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => {
            return (
              <tr key={coin.id}>
                <S.Td textAlign="center">
                  <AddToWatchListButton
                    filled={getButtonStyle(coin.id)}
                    onClick={() => addToWatchList(coin.id)}
                  />
                </S.Td>
                <S.Td textAlign="center">{coin.market_cap_rank}</S.Td>
                <S.Td textAlign="left">
                  <CryptoName
                    icon={coin.image}
                    name={coin.name}
                    symbol={coin.symbol}
                  />
                </S.Td>
                <S.Td>
                  <DollarValue value={coin.current_price} />
                </S.Td>
                <S.Td>
                  <PercentageChange
                    percent={coin.price_change_percentage_1h_in_currency}
                  />
                </S.Td>
                <S.Td>
                  <PercentageChange
                    percent={coin.price_change_percentage_24h_in_currency}
                  />
                </S.Td>
                <S.Td>
                  <PercentageChange
                    percent={coin.price_change_percentage_7d_in_currency}
                  />
                </S.Td>
                <S.Td>
                  <DollarValue value={coin.market_cap} />
                </S.Td>
                <S.Td>
                  <DollarValue value={coin.total_volume} />
                </S.Td>
                <S.Td style={{ display: "flex", justifyContent: "flex-end" }}>
                  <S.SparklinesContainer>
                    <Sparklines data={coin.sparkline_in_7d.price}>
                      <SparklinesLine
                        color={
                          coin.sparkline_in_7d.price[0] <
                          coin.sparkline_in_7d.price[
                            coin.sparkline_in_7d.price.length - 1
                          ]
                            ? "green"
                            : "red"
                        }
                      ></SparklinesLine>
                    </Sparklines>
                  </S.SparklinesContainer>
                </S.Td>
              </tr>
            );
          })}
        </tbody>
      </S.Table>
    </S.RankingsTable>
  );
};

export default RankingsTable;
