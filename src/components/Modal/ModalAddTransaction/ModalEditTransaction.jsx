import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import  {ModalEditTransactionCheckbox}  from './ModalEditTransactionCheckbox';
import { ModalEditTransactionForm } from './ModalEditTransactionForm';
import s from './ModalEditTransaction.module.scss';
import {
  modalShowAddTransaction,
  modalShowEditTransaction,
} from '../../../redux/modal/modalThunk';

export const ModalEditTransaction = () =>{
    const dispatch = useDispatch();
    const handleCloseModal = () => {
      dispatch(modalShowAddTransaction(false));
      dispatch(modalShowEditTransaction(false));
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
        <ModalEditTransactionCheckbox></ModalEditTransactionCheckbox>
        <ModalEditTransactionForm
          onClick={handleCloseModal}
        ></ModalEditTransactionForm>
            <button className={s.closeBtn} type="button" onClick={handleCloseModal}>
              cancel
            </button>
          </div>
          </div>
      
      );
}

export default ModalEditTransaction;

