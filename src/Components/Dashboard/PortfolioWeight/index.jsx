import * as S from "./Styles";
import { AiFillPieChart, AiFillStar } from "react-icons/ai";
import Graph from "../../../shared/components/Graph";
import HomeSectionTitle from "../../../shared/components/HomeSectionTitle";

const PortfolioWeight = () => {
  return (
    <S.HomeGridContainer gridArea="midright">
      <HomeSectionTitle
        icon={<AiFillPieChart style={{ marginRight: "5px" }} />}
        title="Portfolio Weight"
      ></HomeSectionTitle>
      <Graph />
    </S.HomeGridContainer>
  );
};

export default PortfolioWeight;
