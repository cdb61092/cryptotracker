import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../App.css";
import CryptoContext from "./CryptoContext";
import styled from "styled-components";

const SearchBox = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 4px;
  border: none;
  outline: none;
`;

const SearchResult = styled.button`
  border: none;
  display: block;
  background-color: transparent;
  cursor: pointer;
  padding: 5px 0 5px 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: -2px;
  border: none;
  cursor: pointer;
  color: inherit;
  background: none;
  font-size: 2em;
  color: gray;
  outline: none;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 100px;
  z-index: 2;
  overflow-y: hidden;
  width: 300px;
`;

const ResultsContainer = styled.div`
  width: 300px;
  max-height: 300px;
  margin-top: 5px;
  border: 1px solid gray;
  background-color: white;
  overflow-y: visible;
`;
function SearchBar() {
  const [input, setInput] = useState("");
  const [isFocused, setFocus] = useState(false);
  const [results, setResults] = useState([]);
  const [cryptoList, setCryptoList] = useState([]);
  const [setCards] = useContext(CryptoContext);
  let inputTimeout = undefined;

  function clearInput() {
    setInput("");
    setFocus(false);
  }

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/list")
      .then((res) => {
        setCryptoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function onInputChange(event) {
    setFocus(true);
    const value = event.target.value;
    setInput(value);
    if (inputTimeout) {
      clearTimeout(inputTimeout);
      inputTimeout = undefined;
    }
    inputTimeout = setTimeout(() => {
      setResults(
        cryptoList.filter((crypto) => {
          return crypto.name.toLowerCase().includes(input.toLowerCase());
        })
      );
    }, 500);
  }

  function handleClick(e) {
    setCards((prevCards) => {
      return [...prevCards, e.target.value];
    });
    setFocus(false);
  }

  return (
    <Wrapper>
      <SearchBox
        onFocus={() => setFocus(true)}
        type="text"
        placeholder="  &#128269; Search"
        value={input}
        onChange={onInputChange}
      />
      <CloseButton onClick={clearInput}>&#215;</CloseButton>

      <ResultsContainer
        style={
          isFocused && input.length > 0
            ? { display: "block" }
            : { display: "none" }
        }
      >
        {results.map((item) => {
          return (
            <SearchResult onClick={handleClick} key={item.id} value={item.id}>
              {item.name}
            </SearchResult>
          );
        })}
      </ResultsContainer>
    </Wrapper>
  );
}

export default SearchBar;
