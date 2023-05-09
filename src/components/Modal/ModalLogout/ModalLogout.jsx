import { toggleShowModalLogout } from '../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ModalUniversal } from '../ModalUniversal';
import { signout } from '../../../redux/auth/authThunk';
import s from './ModalLogout.module.scss';
import logo from '../../../../images/login/not_found.png';

export const ModalLogout = () => {
  const dispatch = useDispatch();
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  };

  const handleYesBtn = () => {
    dispatch(signout());
    dispatch(toggleShowModalLogout(false));
  };

  const handleCloseModal = () => {
    dispatch(toggleShowModalLogout(false));
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
    <ModalUniversal onClose={handleCloseModal} onClick={handleBackdropClick}>
      <div className={s.box}>
        <img className={s.logo} src={logo} alt="logo"></img>
        <h2 className={s.title}>Do you want to exit?</h2>
        <div className={s.btnBox}>
          <button className={s.yesBtn} type="button" onClick={handleYesBtn}>
            yes
          </button>
          <button className={s.noBtn} type="button" onClick={handleCloseModal}>
            no
          </button>
        </div>
      </div>
    </ModalUniversal>
  );
};
