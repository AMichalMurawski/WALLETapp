import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorEmail } from '../../../redux/auth/selectors';
import { resendVerification } from '../../../redux/auth/authThunk';
import s from '../SuccessRegistractionModal/SuccessRegistractionModal.module.scss';
import IconSvg from '../../../images/vectors/icons.svg';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const SuccessRegistrationModal = () => {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState('');

  const email = useSelector(selectorEmail);

  const resendLetter = () => {
    dispatch(resendVerification({ email })).then(response => {
      if (response.payload.status === 'success') {
        setMsg('The link has beeen sent. Check your email.');
      }
      if (response.payload === 'Request failed with status code 409') {
        setMsg(`User with email - ${email}, already verified`);
      }
    });
  };

  return createPortal(
    <div className={s.modal__backdrop}>
      <div className={s.modal__content}>
        <div className={s.successBox}>
          <IconSvg icon="success" className={s.successIcon} />
          <h1 className={s.successText}>Registration successful</h1>
          <p className={s.successText}>
            We have sent you a verification link to your registered e-mail.
          </p>
          <p className={s.errorText}>
            If you didn't receive the link, please click below.
          </p>
          <button type="button" className={s.resendBtn} onClick={resendLetter}>
            resend
          </button>
          <p className={s.msg}>{msg}</p>
        </div>
      </div>
    </div>,
    modalRoot
  );
};
