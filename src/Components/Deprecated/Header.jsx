import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: lightblue;
  text-align: center;
  justify-content: center;
  border-bottom: 5px solid black;
  padding-bottom: 15px;
`;

const Heading = styled.h1`
  font-size: 50px;
  padding: 10px 0;
  font-weight: 400;
`;

function Header() {
  return (
    <Wrapper>
      <Heading>CryptoTracker</Heading>
      <SearchBar></SearchBar>
    </Wrapper>
  );
}

export default Header;
