import styled from "styled-components";

export const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 20px auto;
  width: 450px;
  height: 470px;
  padding: 30px;
  background-color: #272727;
  z-index: 2;
  border-radius: 5px;
  color: white;
`;

export const SearchBox = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline-color: lightgreen;
  padding-left: 10px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  font-size: 40px;
  color: lightgray;
  border: none;
  outline: none;
  background: none;
  position: absolute;
  top: 0;
  right: 10px;
`;

export const SearchPromptText = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin-bottom: 15px;
`;

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
  border: 1px solid gray;
  border-radius: 4px;
  background-color: white;
  overflow-y: hidden;
  position: absolute;
  z-index: 2;
`;

export const ChangePayTypeButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  color: lightgreen;
  font-size: 14px;
  font-weight: 600;
`;

export const SubmitTransactionButton = styled.button`
  width: 100%;
  height: 40px;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  background-color: #30bf37;
  transition: background-color 0.5s;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #279c2d;
  }
`;

export const TransactionSection = styled.div`
  padding-top: 20px;

  & > * {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline-color: lightgreen;
  border-radius: 5px;
  border: none;
  display: block;
  margin: 10px 0;
  padding-left: 15px;
  font-weight: 400;

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &:disabled {
    background-color: #a6a2a2;
  }
  &:disabled::-webkit-input-placeholder {
    color: white;
  }
`;

export const CryptoTag = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  color: black;
  position: absolute;
  right: 15px;
  top: 0;
`;
