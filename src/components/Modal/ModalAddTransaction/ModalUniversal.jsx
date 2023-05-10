import s from './ModalUniversal.module.scss';
import { createPortal } from 'react-dom';
import { BsXLg } from 'react-icons/bs';

const modalRoot = document.querySelector('#modal-root');

export const ModalUniversal = prop => {
  return createPortal(
    <div className={s.modal__backdrop} onClick={prop.onClick} type="flipInX">
      <div className={s.modal__content}>
        <button className={s.btnClose} onClick={prop.onClose}>
          <BsXLg className={s.btnClose__icon} />
        </button>
        {prop.children}
      </div>
    </div>,
    modalRoot
  );
};
