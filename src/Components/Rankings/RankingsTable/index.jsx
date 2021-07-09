import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { formatPercent } from "../../../shared/utils/formatters";
import PercentageChange from "../../../shared/components/PercentageChange";
import DollarValue from "../../../shared/components/DollarValue";
import CryptoIcon from "../../../shared/components/CryptoIcon";
import CryptoName from "../../../shared/components/CryptoName";
import AddToWatchListButton from "../AddToWatchListButton";
import * as S from "./Styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import IconButton from "../../../shared/components/IconButton";
import Pagination from "../../../shared/components/Pagination";
import SortButton from "../../../shared/components/SortButton";
import { usePagination, useSortBy, useTable } from "react-table";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import useFetchRankings from "../../../shared/hooks/useFetchRankings";
import styled from "styled-components";
import LoadingSpinner from "../../../shared/components/LoadingSpinner";
import ClipLoader from "react-spinners/ClipLoader";

const TableStyles = styled.div`
  width: 90%;
  margin: 0 auto;
  table {
    width: 100%;

    th {
      font-size: 1.8rem;
      font-weight: 700;
      color: gray;
      text-align: right;
      :nth-child(2) {
        text-align: center;
      }
      :nth-child(3) {
        text-align: left;
      }
    }

    tbody {
      font-size: 2rem;
      font-weight: 500;
      color: white;
    }
  }
`;

const RankingsTable = ({
  columns,
  data,
  pageNumber,
  setPageNumber,
  isFetching,
  isPreviousData,
}) => {
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    setPageSize,
    prepareRow,
    state: { pageSize, pageIndex },
  } = useTable(
    { columns, data, initialState: { pageSize: 100 }, manualPagination: true },
    useSortBy,
    usePagination
  );

  useEffect(() => {
    if (!isFetching) {
      setLoadingNextPage(false);
    }
  }, [isFetching]);

  return (
    <TableStyles>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        setLoadingNextPage={setLoadingNextPage}
      />
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <AiFillCaretDown />
                        ) : (
                          <AiFillCaretUp />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {loadingNextPage ? (
              <LoadingSpinner
                Spinner={<ClipLoader color="white" size={150} />}
              />
            ) : (
              page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <S.Td {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </S.Td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </TableStyles>
  );
};

export default RankingsTable;
