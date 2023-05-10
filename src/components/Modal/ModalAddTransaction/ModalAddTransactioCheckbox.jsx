import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import s from './ModalAddTransactionCheckbox.module.scss';
import { useWallet, useModal } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { modalSpliceTransaction } from '../../../redux/modal/modalThunk';


export const ModalAddTransactionCheckbox = prop => {
  const { modalTransaction } = useModal();
  const dispatch = useDispatch();

  const handleCheckbox = e => {
    if (e.currentTarget.checked) {
      dispatch(modalSpliceTransaction({ type: 'income' }));
    } else {
      dispatch(modalSpliceTransaction({ type: 'expense' }));
    }
  };

  return (
    <div className={s.checkboxInfo}>
      <span
        className={s.checkboxText}
        style={
          modalTransaction.type === 'income'
            ? { color: '#24CCA7' }
            : { color: '#e0e0e0' }
        }
      >
        Income
      </span>
      <label className={s.checkboxLabel}>
        <input
          className={s.checkbox}
          type="checkbox"
          onClick={handleCheckbox}
        />
        <div className={s.checkboxIconBox}>
          {modalTransaction.type === 'expense' ? (
            <HiOutlinePlus className={s.checkboxIcon} />
          ) : (
            <HiOutlineMinus className={s.checkboxIcon} />
          )}
        </div>
      </label>
      <span
        className={s.checkboxText}
        style={
          modalTransaction.type === 'expense'
            ? { color: '#FF6596' }
            : { color: '#e0e0e0  ' }
        }
      >
        Expense
      </span>
    </div>
  );
};
