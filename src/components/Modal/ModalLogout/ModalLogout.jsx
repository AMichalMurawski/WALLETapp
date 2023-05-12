import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import s from './ModalLogout.module.scss';
import logo from '../../../images/login/not_found.png';
import { modalShowLogout } from '../../../redux/modal/modalThunk';
import { signout } from '../../../redux/auth/authThunk';

export const ModalLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(signout());
    dispatch(modalShowLogout(false));
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  };

  // const handleYesBtn = () => {
  //   dispatch(signout());
  //   dispatch(modalShowSuccessLogout(false));
  // };

  const handleCloseModal = () => {
    dispatch(modalShowLogout(false));
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
        <img className={s.logo} src={logo} alt="logo"></img>
        <h2 className={s.title}>Do you want to exit?</h2>
        <div className={s.btnBox}>
          <button className={s.yesBtn} type="button" onClick={handleLogout}>
            yes
          </button>
          <button className={s.noBtn} type="button" onClick={handleCloseModal}>
            no
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
