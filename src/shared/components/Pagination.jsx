import styled from "styled-components";
import IconButton from "./IconButton";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ pageNumber, setPageNumber, setLoadingNextPage }) => {
  const nextPage = () => {
    setLoadingNextPage(true);
    setPageNumber((prev) => prev + 1);
  };
  const prevPage = () => {
    if (pageNumber > 1) {
      setLoadingNextPage(true);
      setPageNumber((prev) => prev - 1);
    }
  };
  return (
    <Container>
      <IconButton icon={<FaAngleLeft size="30px" />} onClick={prevPage} />
      <PageNumber>{pageNumber}</PageNumber>
      <IconButton icon={<FaAngleRight size="30px" />} onClick={nextPage} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  font-size: 2rem;
`;

const PageNumber = styled.span`
  top: -3px;
`;

export default Pagination;
