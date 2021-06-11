import styled from "styled-components";

export const SearchResult = styled.button`
  border: none;
  display: block;
  background-color: transparent;
  cursor: pointer;
  padding: 5px 0 5px 10px;
  width: 100%;
  text-align: left;
`;

export const ResultsContainer = styled.div`
  width: 390px;
  max-height: 350px;
  margin-top: 5px;
  border-radius: 4px;
  background-color: white;
  overflow-y: hidden;
  z-index: 2;
`;

export const SearchBox = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline-color: lightgreen;
  padding-left: 10px;

  &:disabled {
    background-color: #a6a2a2;
  }
`;
