import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import s from './ModalAddTransaction.module.scss';
// import { ModalUniversal } from '../ModalUniversal';
import { ModalAddTransactionCheckbox } from './ModalAddTransactioCheckbox';
import { ModalAddTransactionForm } from './ModalAddTransactionForm';
import { modalAddTransaction } from '../../../redux/modal/modalThunk';

const ModalAddTransaction = () => {
  const dispatch = useDispatch();

  const [checkboxStatus, setCheckboxStatus] = useState(false);

  const handleCloseModal = () => {
    dispatch(modalAddTransaction(false));
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  };

  const escKeyDown = e => {
    if (e.code === 'Escape') {
      handleCloseModal();
    }
  };

  const handleCheckbox = e => {
    if (e.currentTarget === e.target) {
      setCheckboxStatus(!checkboxStatus);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', escKeyDown);
      document.body.style.overflow = '';
    };
  });
  return (
    <div
      className={s.backdrop}
      onClose={handleCloseModal}
      onClick={handleBackdropClick}
    >
      <div className={s.box}>
        <h2 className={s.title}>Add transaction</h2>
        <ModalAddTransactionCheckbox
          onHandleCheckbox={handleCheckbox}
          checkboxStatus={checkboxStatus}
        ></ModalAddTransactionCheckbox>
        <ModalAddTransactionForm
          checkboxStatus={checkboxStatus}
          onClick={handleCloseModal}
        ></ModalAddTransactionForm>
        <button className={s.closeBtn} type="button" onClick={handleCloseModal}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default ModalAddTransaction;
