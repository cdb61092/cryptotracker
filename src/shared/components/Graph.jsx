import * as S from "../Styles";
import styled from "styled-components";
import { ResponsivePie } from "@nivo/pie";
import useFetchHoldingsData from "../hooks/useFetchHoldingsData";
import {
  matchGeckoDataToHolding,
  getPortfolioValue,
  matchHoldingDataToGecko,
  eachHoldingHasMarketData,
} from "../utils/portfolioStats";
import { AiFillPieChart, AiFillStar } from "react-icons/ai";
import CryptoIcon from "./CryptoIcon";
import Tooltip from "./Tooltip";
import HomeSectionTitle from "./HomeSectionTitle";

const Graph = () => {
  const { holdings, data, isLoading, isError, error } = useFetchHoldingsData();

  if (isLoading) return null;
  if (isError) return <p>error: {error.message}</p>;

  if (!eachHoldingHasMarketData(holdings, data)) return null;

  const portfolioValue = getPortfolioValue(holdings, data);

  const chartData = holdings.map((holding) => {
    const marketData = matchGeckoDataToHolding(holding, data);
    if (marketData) {
      const holdingValue = holding.quantity * marketData.current_price;
      return {
        id: holding.symbol,
        quantity: holding.quantity,
        value: ((holdingValue / portfolioValue) * 100).toFixed(2),
      };
    }
    return null;
  });

  return (
    <S.HomeGridContainer gridArea="midright">
      <HomeSectionTitle
        icon={<AiFillPieChart style={{ marginRight: "5px" }} />}
        title="Portfolio Weight"
      />

      <ChartContainer>
        <ResponsivePie
          data={chartData}
          innerRadius={0.5}
          padAngle={0.5}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="black"
          arcLinkLabelsColor="white"
          arcLinkLabelsTextColor="white"
          arcLinkLabelsSkipAngle={5}
          arcLinkLabelsDiagonalLength={20}
          arcLinkLabelsStraightLength={30}
          arcLinkLabelsTextOffset={10}
          legends={[
            {
              anchor: "left",
              direction: "column",
              justify: false,
              translateX: 50,
              translateY: 56,
              itemsSpacing: 10,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
            },
          ]}
        ></ResponsivePie>
      </ChartContainer>
    </S.HomeGridContainer>
  );
};

export default Graph;

const ChartContainer = styled.div`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
