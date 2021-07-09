import styled, { css } from "styled-components";

export const HomeGridContainer = styled.div`
  background-color: #11151e;
  padding: 10px;
  grid-area: ${(props) => props.gridArea};
  height: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeSectionTitle = styled.div`
  color: gray;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Heading = styled.h1`
  text-align: center;
  color: white;
  font-size: 4rem;
  margin-bottom: 50px;
`;

export const Table = styled.table`
  width: 100%;

  & th {
    font-size: 1.5rem;
    font-weight: 700;
    color: gray;
  }

  & tbody {
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
  }
`;

const textAlign = css`
  text-align: ${(props) => props.textAlign};
`;

const width = css`
  width: ${(props) => props.width};
`;

const height = css`
  height: ${(props) => props.height};
`;

export const Th = styled.th`
  ${width}
  text-align: ${(props) => props.textAlign || "right"};
`;

export const Td = styled.td`
  ${width}
  text-align: ${(props) => props.textAlign || "right"};
  color: ${(props) => props.color};
`;
export const Tr = styled.tr`
  height: 40px;
`;

export const Icon = styled.img`
  width: 20px;
  top: 3px;
  right: 0px;
  left: 0px;
  margin-right: 5px;
`;

export const AddCryptoButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CoinSearchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 20px auto;
  width: 450px;
  padding: 30px;
  background-color: #272727;
  z-index: 2;
  border-radius: 5px;
  color: white;
`;

export const ModalContainer = styled.div`
  width: 450px;
  padding: 30px;
  background-color: #272727;
  z-index: 2;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  overflow-y: visible;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  font-size: 4rem;
  color: lightgray;
  border: none;
  outline: none;
  background: none;
  position: absolute;
  top: 0;
  right: 10px;
`;

export const CoinSearchLabel = styled.label`
  font-size: 2.4rem;
  font-weight: 500;
  color: white;
  padding-top: 15px;
`;
export const IconWrapper = styled.div`
  color: white;

  &:hover {
    color: red;
  }
`;

export const UnstyledButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;

export const GeckoSearchSubmitButton = styled.button`
  width: 100%;
  height: 40px;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  background-color: #30bf37;
  transition: background-color 0.5s;
  border-radius: 5px;
  margin-top: 20px;
  font-weight: bold;
  align-self: flex-end;

  &:hover {
    background-color: #279c2d;
  }
`;

export const AddToHoldingsButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
  color: gray;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
