import { useState, useMemo, useEffect } from "react";
import { useQuery } from "react-query";
import RankingsTable from "./RankingsTable";
import * as S from "./Styles";
import AddToWatchListButton from "./AddToWatchListButton";
import SortButton from "../../shared/components/SortButton";
import CryptoName from "../../shared/components/CryptoName";
import DollarValue from "../../shared/components/DollarValue";
import { Sparklines, SparklinesLine } from "react-sparklines";
import PercentageChange from "../../shared/components/PercentageChange";
import styled from "styled-components";
import useFetchRankings from "../../shared/hooks/useFetchRankings";
import ClipLoader from "react-spinners/ClipLoader";
import LoadingSpinner from "../../shared/components/LoadingSpinner";

const Rankings = () => {
  const [
    isLoading,
    isFetching,
    isError,
    isPreviousData,
    data,
    pageNumber,
    setPageNumber,
  ] = useFetchRankings();
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "favorite",
        Cell: (cellInfo) => (
          <AddToWatchListButton id={cellInfo.row.original.id} />
        ),
      },
      {
        Header: "#",
        accessor: "market_cap_rank",
        Cell: ({ cell: { value } }) => (
          <div style={{ textAlign: "center" }}>{value}</div>
        ),
      },
      {
        Header: "Coin",
        accessor: "name",
        Cell: (cellInfo) => (
          <div style={{ textAlign: "left" }}>
            <CryptoName
              icon={cellInfo.row.original.image}
              name={cellInfo.row.original.name}
              symbol={cellInfo.row.original.symbol}
            />
          </div>
        ),
      },
      {
        Header: <div style={{ textAlign: "right" }}>Price</div>,
        accessor: "current_price",
        Cell: ({ cell: { value } }) => (
          <DollarValue value={value} style={{ textAlign: "right" }} />
        ),
      },
      {
        Header: () => <div style={{ textAlign: "center" }}>1h</div>,
        accessor: "price_change_percentage_1h_in_currency",
        Cell: ({ cell: { value } }) => (
          <div style={{ textAlign: "center" }}>
            <PercentageChange percent={value} />
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: "center" }}>24h</div>,
        accessor: "price_change_percentage_24h_in_currency",
        Cell: ({ cell: { value } }) => (
          <div style={{ textAlign: "center" }}>
            <PercentageChange percent={value} />
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: "center" }}>7d</div>,
        accessor: "price_change_percentage_7d_in_currency",
        Cell: ({ cell: { value } }) => (
          <div style={{ textAlign: "center" }}>
            <PercentageChange percent={value} />
          </div>
        ),
      },
      {
        Header: <div style={{ textAlign: "right" }}>Market Cap</div>,
        accessor: "market_cap",
        Cell: ({ cell: { value } }) => <DollarValue value={value} />,
      },
      {
        Header: <div style={{ textAlign: "right" }}>24h Volume</div>,
        accessor: "total_volume",
        Cell: ({ cell: { value } }) => <DollarValue value={value} />,
      },
      {
        Header: () => <div style={{ textAlign: "right" }}>Last 7 Days</div>,
        accessor: "sparkline_in_7d.price",
        Cell: ({ cell: { value } }) => (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <S.SparklinesContainer>
              <Sparklines data={value}>
                <SparklinesLine
                  color={value[0] < value[value.length - 1] ? "green" : "red"}
                ></SparklinesLine>
              </Sparklines>
            </S.SparklinesContainer>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <S.Rankings>
      <S.Heading>Cryptocurrency Rankings by Market Cap</S.Heading>
      {!isLoading ? (
        <RankingsTable
          columns={columns}
          data={data}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          isFetching={isFetching}
          isLoading={isLoading}
          isPreviousData={isPreviousData}
        />
      ) : (
        <LoadingSpinner Spinner={<ClipLoader color="white" size={150} />} />
      )}
    </S.Rankings>
  );
};

export default Rankings;
