import { QueryClientProvider, QueryClient } from "react-query";
import * as S from "./Styles";
import PortfolioSummaryBar from "../PortfolioSummaryBar";
import Holdings from "./Holdings";
import WatchList from "../WatchList";
import Graph from "../../shared/components/Graph";
import Transactions from "../Transactions";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: "tracked",
    },
  },
});

const Dashboard = () => {
  (async () => {
    await queryClient.prefetchQuery("GeckoCoinList", () =>
      fetch("https://api.coingecko.com/api/v3/coins/list").then((res) =>
        res.json()
      )
    );
  })();

  return (
    <S.Dashboard>
      <QueryClientProvider client={queryClient}>
        <PortfolioSummaryBar />
        <Holdings />
        <WatchList />
        <Graph />
        <Transactions />
      </QueryClientProvider>
    </S.Dashboard>
  );
};

export default Dashboard;
