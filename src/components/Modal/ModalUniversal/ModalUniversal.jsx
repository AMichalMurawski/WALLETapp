import css from './ModalUniversal.module.scss';
import { createPortal } from 'react-dom';
import { BsXLg } from 'react-icons/bs';

const modalRoot = document.querySelector('#modal-root');

const ModalUniversal = prop => {
  return createPortal(
    <div  onClick={prop.onClick} type="flipInX">
      <div >
        <button  onClick={prop.onClose}>
          <BsXLg  />
        </button>
        {prop.children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalUniversal;