
import { useWallet } from '../../../../hooks/useWallet';
import { useRef, useEffect } from 'react';
import s from './ModalAddTransactionFormMenu.module.scss';

export const ModalAddTransactionFormMenu = props => {
  const { handleCategory, handleBlur } = props;
  const ulFocus = useRef(null);
  useEffect(() => {
    ulFocus.current.focus();
  }, []);
  const categories = (useWallet.categories);

  return (
    <ul
      ref={ulFocus}
      className={s.menu}
      onBlur={() =>
        setTimeout(() => {
          handleBlur();
        }, 150)
      }
      tabIndex="1"
    >
      {categories.map(({ _id, name }) => (
        <li
          className={s.menuItem}
          onClick={e => {
            e.preventDefault();
            handleCategory(_id, name);
          }}
          key={_id}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};
