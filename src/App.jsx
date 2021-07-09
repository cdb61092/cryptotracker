import "./App.css";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Rankings from "./Components/Rankings";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Watchlist from "./Components/Watchlist";
import usePersistReduxState from "./shared/hooks/usePersistReduxState";
import { useEffect } from "react";
const Main = styled.div`
  margin-left: 70px;
  padding: 15px;
  height: 100vh;
`;
const AppContainer = styled.div`
  min-height: 100vh;
  background-color: var(--light-bg);
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: "tracked",
    },
  },
});

function App() {
  console.log("App rerender");
  usePersistReduxState();

  (async () => {
    await queryClient.prefetchQuery("rankings", () =>
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      ).then((res) => res.json())
    );
  })();
  return (
    <AppContainer>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Sidebar />
          <Main>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/rankings">
                <Rankings />
              </Route>
              <Route path="/watchlist">
                <Watchlist />
              </Route>
            </Switch>
          </Main>
        </Router>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </AppContainer>
  );
}

export default App;
