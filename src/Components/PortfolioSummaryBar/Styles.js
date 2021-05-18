import styled from "styled-components";

export const Container = styled.div`
  background-color: #11151e;
  grid-area: top;
  padding: 10px;
  display: flex;
  flex-wrap: nowrap;
`;

export const Header = styled.h2`
  color: #989da8;
  font-size: 1.6em;
`;

export const Section = styled.div`
  display: inline-block;
  padding: 0 3%;
  ${"" /* flex: 1; */}
  text-align: ${(props) => (props.centered ? "center" : "left")}
`;

export const MidSection = styled(Section)`
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  display: flex;
  justify-content: space-around;
  flex: 3;
`;

export const DollarValue = styled.p`
  color: white;
  font-size: 2.2em;
  font-weight: bold;
  text-align: center;
`;

export const DeltaValue = styled.p`
  font-size: 1.6em;
  color: var(--light-green);
  font-weight: 600;
  padding-top: 10px;
`;
