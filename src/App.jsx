import "./App.css";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

const Main = styled.div`
  overflow: hidden;
  margin-left: 70px;
  background-color: #1e2434;
  padding: 15px;
  height: 100%;
`;
const AppContainer = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Sidebar />
        <Main>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/watchlist"></Route>
            <Route path="/rankings"></Route>
          </Switch>
        </Main>
      </Router>
    </AppContainer>
  );
}

export default App;
