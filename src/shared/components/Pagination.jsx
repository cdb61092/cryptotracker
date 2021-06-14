import styled from "styled-components";
import IconButton from "./IconButton";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ page, setPage }) => {
  return (
    <Container>
      <IconButton
        icon={<FaAngleLeft size="30px" />}
        onClick={() => setPage((prev) => prev - 1)}
        top="50px"
      />
      <PageNumber>{page}</PageNumber>

      <IconButton
        icon={<FaAngleRight size="30px" />}
        onClick={() => setPage((prev) => prev + 1)}
      />
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
