
import s from './ModalAddTransactionCheckbox.module.scss';
import { useModal } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { modalSpliceTransaction } from '../../../redux/modal/modalThunk';

export const ModalEditTransactionCheckbox = prop => {
  const { modalTransaction } = useModal();
  const dispatch = useDispatch();

  const handleString = e => {
    if (e.currentTarget.checked) {
      dispatch(modalSpliceTransaction({ type: 'income' }));
    } else {
      dispatch(modalSpliceTransaction({ type: 'expense' }));
    }
  };

  return (
    <div className={s.checkboxInfo}>
      <p
        className={s.checkboxText}
        style={
          modalTransaction.type === 'income'
            ? { color: '#24CCA7' }
            : { color: '#e0e0e0' }
        }
      >
        Income
      </p>
      
      
      <p
        className={s.checkboxText}
        style={
          modalTransaction.type === 'expense'
            ? { color: '#FF6596' }
            : { color: '#e0e0e0  ' }
        }
      >
        Expense
      </p>
    </div>
  );
};
