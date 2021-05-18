import React from "react";
import { formatPercent } from "../utils/formatters";

const PercentageChange = ({ percent }) => {
  return (
    <span
      style={{
        color: percent < 0 ? "#d94e4e" : "var(--light-green)",
        fontWeight: "bold",
      }}
    >
      {percent > 0 && "+"}
      {formatPercent(percent)}
      {percent < 0 ? "↓" : "↑"}
    </span>
  );
};

export default PercentageChange;
