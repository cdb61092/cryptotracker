import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  border: 2px solid
    ${(props) => (props.transactionType === "buy" ? "green" : "red")};
  height: 100px;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 5px 0;
  display: flex;
`;

const Column = styled.div`
  flex: 33.33%;
`;

const DataHeader = styled.p`
  font-size: 12px;
`;

const DataValue = styled.p`
  font-weight: bold;
`;

function Transaction({ price, amountTraded, currentPrice, transactionType }) {
  const worth = amountTraded * currentPrice;
  const cost = amountTraded * price;
  const delta = ((worth - cost) / cost).toLocaleString("en-us", {
    style: "percent",
    minimumFractionDigits: 2,
  });
  return (
    <Wrapper transactionType={transactionType}>
      <Column>
        <div>
          <DataHeader>
            {transactionType === "buy" ? "Buy" : "Sell"} Price:
          </DataHeader>
          <DataValue>{price}</DataValue>
        </div>
        <div>
          <DataHeader>Cost</DataHeader>
          <DataValue>{cost}</DataValue>
        </div>
      </Column>
      <Column>
        <div>
          <DataHeader>
            Amount {transactionType === "buy" ? "Bought" : "Sold"}
          </DataHeader>
          <DataValue>{amountTraded}</DataValue>
        </div>
      </Column>
      <Column>
        <DataHeader>Delta</DataHeader>
        <DataValue>{delta}</DataValue>
      </Column>
    </Wrapper>
  );
}

export default Transaction;
