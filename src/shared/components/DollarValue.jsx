import { formatMoney } from "../utils/formatters";

const DollarValue = ({ value }) => {
  return <span>{formatMoney(value)}</span>;
};

export default DollarValue;
