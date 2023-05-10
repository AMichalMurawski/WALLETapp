import { useEffect } from 'react';
import { useAuth, useWallet } from '../../hooks';
import scss from './Balance.module.scss';
import { useDispatch } from 'react-redux';
import { getTransactions } from '../../redux/wallet/walletThunk';

export const Balance = () => {
  const { balance } = useWallet();
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getTransactions({ walletId: user.wallets[0].id }));
  }, [dispatch, user.wallets]);

  return (
    <div className={scss.balance}>
      <div className={scss.balanceMain}>
        <div className={scss.balanceTitle}>Your Balance</div>
        <div className={scss.balanceNumber}>{balance}</div>
      </div>
    </div>
  );
};
