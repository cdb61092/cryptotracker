import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  selectHoldings,
  updateHolding,
} from "../../features/holdings/holdingsSlice";

function useGeckoAPI() {
  const holdings = useSelector(selectHoldings);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("geckoAPI");
    let ids = [];
    holdings.map((holding) => ids.push(holding.id));
    const apiParams = ids.join();
    let ignore = false;
    window.setTimeout(function () {
      const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${apiParams}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C1y`;
      axios
        .get(URL)
        .then((res) => {
          if (!ignore) {
            const cryptoData = res.data;
            let newState = holdings.map((holding) => {
              const data = cryptoData.find((crypto) => {
                return crypto.id === holding.id;
              });
              return {
                id: holding.id,
                name: holding.name,
                symbol: data.symbol,
                img: data.image,
                amount: holding.amount,
                totalCost: holding.totalCost,
                currentPrice: data.current_price,
                marketCapRank: data.market_cap_rank,
                change1D: data.price_change_percentage_24h_in_currency,
                change7D: data.price_change_percentage_7d_in_currency,
                change30D: data.price_change_percentage_30d_in_currency,
                sparklineData: data.sparkline_in_7d.price,
                isDoneLoading: true,
              };
            });
            dispatch(updateHolding(newState));
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 10000);

    return function cleanUp() {
      ignore = true;
    };
  }, [holdings, dispatch]);

  return loading;
}

export default useGeckoAPI;
