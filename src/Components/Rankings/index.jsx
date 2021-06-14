import { useState } from "react";
import { QueryClientProvider, QueryClient, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RankingsTable from "./RankingsTable";
import * as S from "./Styles";

const Rankings = () => {
  return (
    <S.Rankings>
      <S.Heading>Cryptocurrency Rankings by Market Cap</S.Heading>
      <RankingsTable></RankingsTable>
    </S.Rankings>
  );
};

export default Rankings;
