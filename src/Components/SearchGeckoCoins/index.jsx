import React, { useState, useEffect, useMemo, useRef } from "react";
import { useQuery, useQueryClient } from "react-query";
import PercentageChange from "../../shared/components/PercentageChange";

import * as S from "./Styles";

const SearchGeckoCoins = ({ onResultSelect }) => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const { data } = useQuery(
    "GeckoCoinList",
    () =>
      fetch("https://api.coingecko.com/api/v3/coins/list").then((res) =>
        res.json()
      ),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data) {
      setResults(
        data.filter((crypto) => {
          return crypto.name.toLowerCase().includes(input.toLowerCase());
        })
      );
    }
  }, [data, input]);

  const onCryptoSelection = (id, name, symbol) => {
    onResultSelect(id, name, symbol);
    setShowResults(false);
    setInput(`${name} (${symbol.toUpperCase()})`);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
    if (input.length === 0) {
      setShowResults(false);
    }
    setShowResults(true);
  };

  return (
    <>
      <S.SearchBox
        type="text"
        placeholder="&#128269; Search"
        value={input}
        onChange={onInputChange}
      ></S.SearchBox>
      {showResults && (
        <S.ResultsContainer>
          {results.map((result) => {
            return (
              <S.SearchResult
                key={result.id}
                onClick={() =>
                  onCryptoSelection(result.id, result.name, result.symbol)
                }
              >
                {result.name} ({result.symbol.toUpperCase()})
              </S.SearchResult>
            );
          })}
        </S.ResultsContainer>
      )}
    </>
  );
};

export default SearchGeckoCoins;
