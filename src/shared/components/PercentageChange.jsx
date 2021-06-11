import React from "react";
import { formatPercent } from "../utils/formatters";
import styled from "styled-components";

const Container = styled.p`
  font-size: inherit;
  font-weight: 600;
  display: inline-block;
`;

const PercentageChange = ({ percent }) => {
  return (
    <Container
      style={{
        color: percent < 0 ? "#d94e4e" : "var(--light-green)",
      }}
    >
      {percent > 0 && "+"}
      {formatPercent(percent)}
    </Container>
  );
};

export default PercentageChange;
