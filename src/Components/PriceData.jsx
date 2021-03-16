import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  position: absolute;
  top: 20px;
  right: 0px;
`;

const FlexCol = styled.div`
  flex: 25%;
`;

const DataHeader = styled.p`
  font-family: arial;
  font-size: 16px;
  font-weight: bold;
`;

const DataValue = styled.span`
  color: ${(props) => (props.value > 0 ? "green" : "red")};
  font-weight: 600;
`;

const Price = styled.span`
  font-weight: 600;
`;

function PriceData(props) {
  return (
    <Wrapper>
      <FlexCol>
        <DataHeader>Price</DataHeader>
        <Price>${props.data.current_price.usd.toLocaleString()}</Price>
      </FlexCol>
      <FlexCol>
        <DataHeader>1 Day</DataHeader>
        <DataValue value={props.data.price_change_percentage_24h}>
          {props.data.price_change_percentage_24h.toFixed(2)}%
          {props.data.price_change_percentage_24h > 0 ? "↑" : "↓"}
        </DataValue>
      </FlexCol>
      <FlexCol>
        <DataHeader>1 Week</DataHeader>
        <DataValue value={props.data.price_change_percentage_7d}>
          {props.data.price_change_percentage_7d.toFixed(2)}%
          {props.data.price_change_percentage_7d > 0 ? "↑" : "↓"}
        </DataValue>
      </FlexCol>
      <FlexCol>
        <DataHeader>1 Month</DataHeader>
        <DataValue value={props.data.price_change_percentage_30d}>
          {props.data.price_change_percentage_30d.toFixed(2)}%
          {props.data.price_change_percentage_30d > 0 ? "↑" : "↓"}
        </DataValue>
      </FlexCol>
    </Wrapper>
  );
}

export default PriceData;
