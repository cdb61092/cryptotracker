import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 2;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 10px;
`;

const Button = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  border: 3px solid;
  outline: none;
`;

const BuyButton = styled(Button)`
  color: ${(props) => (props.transactionType === "buy" ? "white" : "gray")};
  background-color: ${(props) =>
    props.transactionType === "buy" ? "#1B6509" : "black"};

  border-color: ${(props) =>
    props.transactionType === "buy" ? "#21BB10" : "gray"};
  font-weight: ${(props) =>
    props.transactionType === "buy" ? "bold" : "normal"};
`;

const SellButton = styled(Button)`
  color: ${(props) => (props.transactionType === "sell" ? "white" : "gray")};
  background-color: ${(props) =>
    props.transactionType === "sell" ? "#701111" : "black"};
  border-color: ${(props) =>
    props.transactionType === "sell" ? "#F83333" : "gray"};
  font-weight: ${(props) =>
    props.transactionType === "sell" ? "bold" : "normal"};
`;

const AddTransactionButton = styled.button`
  width: 90%;
  margin: 20px auto;
  display: block;
`;

const CryptoIcon = styled.img`
  display: inline-block;
  height: 20px;
`;

const AddTransactionDialog = ({ crypto, addTransaction }) => {
  const [transactionType, setTransactionType] = useState("buy");
  const [amountTraded, setAmountTraded] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <Wrapper>
      <div style={{ textAlign: "center" }}>
        <CryptoIcon src={crypto.image.small} alt="crypto icon"></CryptoIcon>
        <p style={{ display: "inline-block" }}>{crypto.name}</p>
      </div>

      <ButtonWrapper>
        <BuyButton
          transactionType={transactionType}
          onClick={() => setTransactionType("buy")}
        >
          Buy
        </BuyButton>
        <SellButton
          transactionType={transactionType}
          onClick={() => setTransactionType("sell")}
        >
          Sell
        </SellButton>
      </ButtonWrapper>
      <label htmlFor="amountTraded">
        Amount {transactionType === "buy" ? "bought" : "sold"}
      </label>
      <input
        type="number"
        name="amountTraded"
        onChange={(e) => setAmountTraded(e.target.value)}
      ></input>
      <br />
      <label htmlFor="price">Price</label>
      <select style={{ float: "right" }}>
        <option>Total</option>
        <option>Per</option>
      </select>
      <br></br>
      <input
        type="number"
        name="price"
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <AddTransactionButton
        onClick={() => {
          addTransaction({
            amountTraded: amountTraded,
            price: price,
            transactionType: transactionType,
          });
        }}
      >
        Add Transaction
      </AddTransactionButton>
    </Wrapper>
  );
};

export default AddTransactionDialog;
