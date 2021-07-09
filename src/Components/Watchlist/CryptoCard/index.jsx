import * as S from "./Styles";
import { useQuery } from "react-query";

const CryptoCard = ({ id }) => {
  const { data, isLoading, isError } = useQuery(id + "marketData", () =>
    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&sparkline=true`
    ).then((res) => res.json())
  );

  console.log(data);

  return <S.CryptoCard id="bob"></S.CryptoCard>;
};

export default CryptoCard;
