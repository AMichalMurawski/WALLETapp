import { useSelector } from 'react-redux';
import {
  selectShowAddTransaction,
  selectShowEditTransaction,
  selectShowLogout,
  selectShowSuccessRegistration,
} from '../redux/modal/selectors';

export const useModal = () => {
  const showAddTransaction = useSelector(selectShowAddTransaction);
  const showEditTransaction = useSelector(selectShowEditTransaction);
  const showLogout = useSelector(selectShowLogout);
  const showSuccessRegistration = useSelector(selectShowSuccessRegistration);

  return {
    showAddTransaction,
    showEditTransaction,
    showLogout,
    showSuccessRegistration,
  };
};
