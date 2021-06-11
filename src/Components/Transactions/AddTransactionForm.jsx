import Modal from "../../shared/components/Modal";
import * as S from "./Styles";
import { useDispatch } from "react-redux";
import TransactionSection from "../../shared/components/TransactionSection";

const AddTransactionForm = ({ closeForm }) => {
  return (
    <Modal>
      <S.CloseButton onClick={() => closeForm()}>×</S.CloseButton>
      <TransactionSection></TransactionSection>
    </Modal>
  );
};

export default AddTransactionForm;
