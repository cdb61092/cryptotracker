import { Sparklines, SparklinesLine } from "react-sparklines";
import styled from "styled-components";

const SparklinesContainer = styled.div`
  width: ${(props) => props.width};
`;

const CryptoSparkline = ({ data, width }) => {
  return (
    <SparklinesContainer width={width}>
      <Sparklines data={data}>
        <SparklinesLine
          color={data[0] < data[data.length - 1] ? "green" : "red"}
        ></SparklinesLine>
      </Sparklines>
    </SparklinesContainer>
  );
};

export default CryptoSparkline;
