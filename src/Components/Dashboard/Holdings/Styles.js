import styled from "styled-components";
import {
  HomeGridContainer,
  HomeSectionTitle,
  Table,
  Th,
  Td,
  Tr,
  UnstyledButton,
  CloseButton,
  GeckoSearchSubmitButton,
  AddToHoldingsButton,
} from "../../../shared/Styles";
export {
  HomeGridContainer,
  HomeSectionTitle,
  Table,
  Th,
  Td,
  Tr,
  UnstyledButton,
  CloseButton,
  GeckoSearchSubmitButton,
  AddToHoldingsButton,
};

export const SearchPromptText = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin-bottom: 15px;
`;

export const Icon = styled.img`
  width: 20px;
  top: 3px;
  right: 3px;
`;

export const Container = styled.div`
  background-color: #11151e;
  padding: 10px;
  grid-area: midleft;
`;

export const Header = styled.th`
  color: gray;
  font-size: 15px;
`;

export const SubmitTransactionButton = styled.button`
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

  &:hover {
    background-color: #279c2d;
  }
`;

export const TransactionSection = styled.div`
  padding-top: 20px;

  & > * {
    font-size: 14px;
    font-weight: 600;
  }
`;
