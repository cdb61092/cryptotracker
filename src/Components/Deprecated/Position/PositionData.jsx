import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Transaction from "./Transaction";
import AddTransactionDialog from "./AddTransactionModal";
import { useReducer } from "react";

const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  bottom: 10px;
  width: 250px;
  margin-left: 10px;
  overflow-y: hidden;
`;

const AddPosition = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border-radius: 4px;
  width: 50px;
  height: 25px;
  overflow-y: visible;
  cursor: pointer;
  background-color: #3861fb;
  color: white;
  border: none;
  outline: none;
  font-weight: 600;
`;

const LeftCol = styled.div`
  flex: 50%;
`;

const DataHeader = styled.span`
  font-weight: 600;
`;

const RightCol = styled.div`
  text-align: right;
  flex: 30%;
`;

const DataWrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: 12px;
`;

const TransactionWrapper = styled.div`
  overflow-y: auto;
  max-height: 350px;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 9px;
    background-color: #f5f5f5;
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

// function reducer(state, action) {
// switch (action.type) {
//   case "recalculate":
//     return
// }
// }

function PositionData({ crypto }) {
  // const [{totalOwned, totalCost, profit, worth}, dispatch] = useReducer(reducer, {totalOwned: 0, totalCost: 0, profit: 0, worth: 0})
  const [totalOwned, setTotalOwned] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [profit, setProfit] = useState(0);
  const [worth, setWorth] = useState(0);
  const [showAddTransactionDialog, setShowAddTransactionDialog] = useState(
    false
  );
  const [transactions, setTransactions] = useState([]);
  const currentPrice = crypto.market_data.current_price.usd;

  const addTransactionCallback = useCallback((transaction) => {
    setTransactions((prev) => [...prev, transaction]);
    setShowAddTransactionDialog(false);
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      const tempTotalOwned = transactions.reduce(
        (total, current) => total + parseInt(current.amountTraded),
        0
      );
      const tempTotalCost = transactions.reduce(
        (total, current) => total + parseInt(current.price),
        0
      );
      setTotalOwned(tempTotalOwned);
      setTotalCost(tempTotalCost);
    }
  }, [transactions]);

  useEffect(() => {
    setWorth(totalOwned * currentPrice);
  }, [totalOwned, currentPrice]);

  useEffect(() => {
    setProfit(worth - totalCost);
  }, [worth, totalCost]);

  return (
    <Wrapper>
      {showAddTransactionDialog && (
        <AddTransactionDialog
          crypto={crypto}
          addTransaction={addTransactionCallback}
        ></AddTransactionDialog>
      )}
      <h4 style={{ marginBottom: "15px" }}>Your Position</h4>
      <AddPosition
        onClick={() => {
          setShowAddTransactionDialog(!showAddTransactionDialog);
        }}
      >
        &#43; Add
      </AddPosition>
      <DataWrapper>
        <LeftCol>
          <div>
            <DataHeader>Total Owned: </DataHeader>
            <span>{totalOwned}</span>
          </div>
          <div>
            <DataHeader>Total Cost: </DataHeader>
            <span>{totalCost}</span>
          </div>
        </LeftCol>
        <RightCol>
          <div>
            <DataHeader>Profit: </DataHeader>
            <span>{profit}</span>
          </div>
          <div>
            <DataHeader>Worth: </DataHeader>
            <span>{worth}</span>
          </div>
        </RightCol>
      </DataWrapper>
      <TransactionWrapper>
        {transactions.length > 0 &&
          transactions.map((transaction, index) => {
            return (
              <Transaction
                key={index}
                amountTraded={transaction.amountTraded}
                price={transaction.price}
                currentPrice={crypto.market_data.current_price.usd}
                transactionType={transaction.transactionType}
              ></Transaction>
            );
          })}
      </TransactionWrapper>
    </Wrapper>
  );
}

export default PositionData;
