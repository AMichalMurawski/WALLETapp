import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import s from './ModalAddTransactionCheckbox.module.scss';
//import { useWallet } from '../../../hooks/useWallet';

export const ModalAddTransactionCheckbox = prop => {
  return (
    <div className={s.checkboxInfo}>
      <span
        className={s.checkboxText}
        style={true ? { color: '#24CCA7' } : { color: '#e0e0e0' }}
      >
        Income
      </span>
      <label className={s.checkboxLabel}>
        <input className={s.checkbox} type="checkbox" />
        <div className={s.checkboxIconBox}>
          {true ? (
            <HiOutlinePlus className={s.checkboxIcon} />
          ) : (
            <HiOutlineMinus className={s.checkboxIcon} />
          )}
        </div>
      </label>
      <span
        className={s.checkboxText}
        style={!true ? { color: '#FF6596' } : { color: '#e0e0e0' }}
      >
        Expense
      </span>
    </div>
  );
};
