import s from './ModalAddTransactionCheckbox.module.scss';
import { useModal } from '../../../hooks';

export const ModalEditTransactionCheckbox = prop => {
  const { modalTransaction } = useModal();

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
      <p>/</p>
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
