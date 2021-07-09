import * as S from "./Styles";
import CryptoName from "../../../shared/components/CryptoName";
import CryptoSparkline from "../../../shared/components/CryptoSparkline";

const Row = ({ data }) => {
  const {
    market_cap,
    market_cap_rank,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    total_volume,
    sparkline_in_7d,
  } = data;
  return (
    data && (
      <>
        <S.Cell>{market_cap_rank}</S.Cell>
        <S.Cell>
          <CryptoName icon={image} name={name} symbol={symbol} />
        </S.Cell>
        <S.Cell>{current_price}</S.Cell>
        <S.Cell>{price_change_percentage_1h_in_currency}</S.Cell>
        <S.Cell>{price_change_percentage_24h_in_currency}</S.Cell>
        <S.Cell>{price_change_percentage_7d_in_currency}</S.Cell>
        <S.Cell>{total_volume}</S.Cell>
        <S.Cell>{market_cap}</S.Cell>
        <S.Cell>
          <CryptoSparkline data={sparkline_in_7d.price} width="250px" />
        </S.Cell>
      </>
    )
  );
};

export default Row;
