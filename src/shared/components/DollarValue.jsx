import { formatMoney } from "../utils/formatters";
import styled from "styled-components";

const DollarValue = ({ value }) => {
  return <Container>{formatMoney(value)}</Container>;
};

const Container = styled.div`
  text-align: ${(props) => props.textAlign || "right"};
`;

export default DollarValue;
