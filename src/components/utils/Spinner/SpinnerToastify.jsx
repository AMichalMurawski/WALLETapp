import { Spinner } from './Spinner';
import scss from './SpinnerToastify.module.scss';

export const SpinnerToastify = ({ message }) => {
  return (
    <div className={scss.spinnerBox}>
      <Spinner diameter="20" />
      <p className={scss.spinnerMessage}>{message}</p>
    </div>
  );
};
