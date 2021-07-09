import useFetchWatchList from "../../shared/hooks/useFetchWatchList";
import * as S from "./Styles";
import CryptoCard from "./CryptoCard";

const Watchlist = () => {
  const { ids } = useFetchWatchList();

  return (
    <S.Watchlist>
      <S.Heading>Watchlist</S.Heading>
      <S.CardGrid>
        {ids.map((id) => (
          <CryptoCard id={id} />
        ))}
      </S.CardGrid>
    </S.Watchlist>
  );
};

export default Watchlist;
