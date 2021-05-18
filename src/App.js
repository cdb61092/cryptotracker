import "./App.css";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import PortfolioSummaryBar from "./Components/PortfolioSummaryBar";
import Holdings from "./Components/Holdings";
import useGeckoAPI from "./shared/hooks/useGeckoAPI";

const Main = styled.div`
  margin-left: 70px;
  background-color: #1e2434;
  padding: 15px;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 100px 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "top top"
    "midleft midright"
    "botleft botright";
  column-gap: 15px;
  row-gap: 15px;
`;

const AppContainer = styled.div`
  height: 100vh;
  background-color: white;
`;

function App() {
  console.log("Entire app rerender");
  const loading = useGeckoAPI();

  // useEffect(() => {
  //   dispatch(setCrypto(JSON.parse(localStorage.getItem("cryptos"))));
  // }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem("cryptos", JSON.stringify(cryptos));
  // });

  return (
    <AppContainer>
      <Sidebar></Sidebar>
      <Main>
        <PortfolioSummaryBar loading={loading} />
        <Holdings loading={loading}></Holdings>
        {/* <Holdings></Holdings>
        <Holdings></Holdings>
        <Holdings></Holdings> */}
      </Main>
    </AppContainer>
  );
}

export default App;
