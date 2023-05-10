import scss from './AddButton.module.scss';
import { useDispatch } from 'react-redux';
import { modalShowAddTransaction } from '../../../redux/modal/modalThunk';

export const AddButton = () => {
  const dispatch = useDispatch();

  const handleModalTransaction = e => {
    console.log('open modal');
    dispatch(modalShowAddTransaction(true));
  };

  return (
    <div className={scss.statsButtonContainer}>
      <button
        type="button"
        className={scss.statsButton}
        onClick={handleModalTransaction}
      >
        +
      </button>
    </div>
  );
};
