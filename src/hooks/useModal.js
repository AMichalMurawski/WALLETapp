import { useSelector } from 'react-redux';
import {
  selectShowAddTransaction,
  selectShowEditTransaction,
  selectShowLogout,
  selectShowSuccessRegistration,
  selectModalTransaction,
} from '../redux/modal/selectors';

export const useModal = () => {
  const showAddTransaction = useSelector(selectShowAddTransaction);
  const showEditTransaction = useSelector(selectShowEditTransaction);
  const showLogout = useSelector(selectShowLogout);
  const showSuccessRegistration = useSelector(selectShowSuccessRegistration);
  const modalTransaction = useSelector(selectModalTransaction);

  return {
    showAddTransaction,
    showEditTransaction,
    showLogout,
    showSuccessRegistration,
    modalTransaction,
  };
};
