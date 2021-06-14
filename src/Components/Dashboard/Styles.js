import styled from "styled-components";

export const Dashboard = styled.div`
  background-color: #1e2434;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "top top"
    "midleft midright"
    "botleft botright";
  grid-gap: 15px;
`;
