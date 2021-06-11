import { Sparklines, SparklinesLine } from "react-sparklines";
import PercentageChange from "../../shared/components/PercentageChange";
import * as S from "../../shared/Styles";
import { formatMoney } from "../../shared/utils/formatters";
import { CgCloseO } from "react-icons/cg";

const Row = ({ data, removeFromWatchList }) => {
  if (data) {
    return (
      <S.Tr>
        <S.Td textAlign="center">{data.market_cap_rank}</S.Td>
        <S.Td textAlign="left">
          <S.Icon src={data.image} />
          {data.name}
        </S.Td>
        <S.Td textAlign="right">{formatMoney(data.current_price)}</S.Td>
        <S.Td textAlign="right">{formatMoney(data.market_cap)}</S.Td>
        <S.Td textAlign="center">
          <PercentageChange
            percent={data.price_change_percentage_1h_in_currency}
          />
        </S.Td>
        <S.Td textAlign="center">
          <PercentageChange
            percent={data.price_change_percentage_24h_in_currency}
          />
        </S.Td>
        <S.Td textAlign="center">
          <PercentageChange
            percent={data.price_change_percentage_7d_in_currency}
          />
        </S.Td>
        <S.Td textAlign="center">
          <Sparklines data={data.sparkline_in_7d.price} width={150} height={40}>
            <SparklinesLine
              color={
                data.sparkline_in_7d.price[0] <
                data.sparkline_in_7d.price[
                  data.sparkline_in_7d.price.length - 1
                ]
                  ? "green"
                  : "red"
              }
            ></SparklinesLine>
          </Sparklines>
        </S.Td>
        <S.Td textAlign="right">
          <S.UnstyledButton onClick={() => removeFromWatchList()}>
            <S.IconWrapper>
              <CgCloseO size="20px" />
            </S.IconWrapper>
          </S.UnstyledButton>
        </S.Td>
      </S.Tr>
    );
  }
  return null;
};

export default Row;
