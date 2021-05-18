import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import styled from "styled-components";

const SearchBox = styled.input`
  width: 290px;
  height: 30px;
  border-radius: 4px;
  border: none;
  outline: none;
  padding-left: 10px;
  &:focus::placeholder {
    color: transparent;
  }
`;

const SearchResult = styled.button`
  border: none;
  display: block;
  background-color: transparent;
  cursor: pointer;
  padding: 5px 0 5px 10px;
  width: 100%;
  text-align: left;
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
  text-align: center;
  z-index: 2;
  overflow-y: hidden;
  width: 250px;
  margin: 20px auto;
`;

const ResultsContainer = styled.div`
  position: absolute;
  top: 50%;
  z-index: 10;
  width: 300px;
  max-height: 300px;
  margin-top: 5px;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: white;
  overflow-y: visible;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;
function SearchBar({ setCryptoName }) {
  const [input, setInput] = useState("");
  const [isFocused, setFocus] = useState(false);
  const [results, setResults] = useState([]);
  const [cryptoList, setCryptoList] = useState([]);
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

  useEffect(() => {
    setResults(
      cryptoList.filter((crypto) => {
        return crypto.name.toLowerCase().includes(input.toLowerCase());
      })
    );
  }, [cryptoList, input]);

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

  function handleClick(name, id) {
    setCryptoName(name, id);
    setFocus(false);
    setInput("");
  }

  return (
    <Wrapper>
      <SearchBox
        onFocus={() => setFocus(true)}
        type="text"
        placeholder="&#128269; Search"
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
            <SearchResult
              onClick={() => {
                handleClick(item.name, item.id);
              }}
              key={item.id}
              value={item.id}
            >
              {item.name}
            </SearchResult>
          );
        })}
      </ResultsContainer>
    </Wrapper>
  );
}

export default SearchBar;
