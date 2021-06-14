import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import AddToWatchListForm from "./AddToWatchListForm";
import HomeSectionTitle from "../../../shared/components/HomeSectionTitle";
import useWatchListIds from "../../../shared/hooks/useWatchListIds";
import Row from "./Row";
import * as S from "../../../shared/Styles";
import useFetchWatchList from "../../../shared/hooks/useFetchWatchList";
import CircleAddButton from "../../../shared/components/CircleAddButton";

const WatchList = () => {
  const [showAddToWatchListForm, setShowAddToWatchListForm] = useState(false);
  const [ids, addToWatchList, removeFromWatchList] = useWatchListIds();
  const { isLoading, isError, data, error } = useFetchWatchList(ids);

  if (isLoading) return <span>loading...</span>;

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <S.HomeGridContainer gridArea="botleft">
      {showAddToWatchListForm && (
        <AddToWatchListForm
          closeForm={() => setShowAddToWatchListForm(false)}
          addToWatchList={addToWatchList}
        />
      )}
      <HomeSectionTitle
        icon={<AiFillStar style={{ marginRight: "5px" }} />}
        title="Watch List"
      >
        <CircleAddButton
          size="30px"
          color="gray"
          top="0"
          right="0"
          onClick={() => setShowAddToWatchListForm(true)}
        />
      </HomeSectionTitle>

      <S.Table>
        <thead>
          <tr>
            <S.Th textAlign="left" width="30px">
              #
            </S.Th>
            <S.Th textAlign="left">Coin</S.Th>
            <S.Th textAlign="right">Price</S.Th>
            <S.Th textAlign="right">Market Cap</S.Th>
            <S.Th textAlign="center">1h</S.Th>
            <S.Th textAlign="center">24h</S.Th>
            <S.Th textAlign="center">7d</S.Th>
            <S.Th textAlign="center" width="150px">
              Last 7 Days
            </S.Th>
            <S.Th width="25px" />
          </tr>
        </thead>
        <tbody>
          {ids.map((id) => {
            return (
              <Row
                data={data.find((coin) => coin.id === id)}
                key={id}
                removeFromWatchList={removeFromWatchList}
              ></Row>
            );
          })}
        </tbody>
      </S.Table>
    </S.HomeGridContainer>
  );
};

export default WatchList;
