import React, { useState } from "react";

import styled from "styled-components";
import { useEffect } from "react";
import PercentageChange from "../../shared/components/PercentageChange";
import { formatMoney } from "../../shared/utils/formatters";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Icon } from "./Styles";

const Row = styled.tr`
  font-size: 18px;
  font-weight: 500;
`;

const Cell = styled.td``;

function HoldingsRow({ data }) {
  const {
    symbol,
    img,
    amount,
    totalCost,
    currentPrice,
    change1D,
    sparklineData,
    isDoneLoading,
  } = data;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isDoneLoading) {
      setLoading(false);
    }
  }, [setLoading, isDoneLoading]);

  return (
    !loading && (
      <Row>
        <td style={{ marginLeft: "5px" }}>
          <Icon src={img} alt="crypto"></Icon>
          {symbol.toUpperCase()}
        </td>
        <td style={{ textAlign: "right" }}>{amount}</td>
        <td style={{ textAlign: "right" }}>{currentPrice}</td>
        <td style={{ textAlign: "right" }}>
          {formatMoney(amount * currentPrice)}
        </td>
        <td style={{ textAlign: "center" }}>
          <PercentageChange percent={change1D} />
        </td>
        <td style={{ textAlign: "center" }}>
          <PercentageChange
            percent={((amount * currentPrice) / totalCost) * 100}
          />
        </td>
        <td>
          <Sparklines data={sparklineData} width={150} height={40}>
            <SparklinesLine
              color={
                sparklineData[0] < sparklineData[sparklineData.length - 1]
                  ? "green"
                  : "red"
              }
            ></SparklinesLine>
          </Sparklines>
        </td>
      </Row>
    )
  );
}

export default HoldingsRow;
