import { useEffect } from 'react';
import { useAuth, useWallet } from '../../hooks';
import scss from './Balance.module.scss';
import { useDispatch } from 'react-redux';
import { getTransactions } from '../../redux/wallet/walletThunk';
import Media from 'react-media';
import { AddButton } from '../utils/AddButton/AddButton';

export const Balance = () => {
 const { balance } = useWallet();
 const dispatch = useDispatch();
 const { user } = useAuth();
 useEffect(() => {
   dispatch(getTransactions({ walletId: user.wallets[0].id }));
 }, [dispatch, user.wallets]);

 return (
  <Media
  queries={{
  mob: '(max-width: 767px)',
  tab: '(min-width: 768px) and (max-width: 1280px)',
  desk: '(min-width: 1280px)',
 }}>
  {matches =>(
   <>
   {matches.mob ? (
      <div className={scss.balance}>
   <div className={scss.balanceMain}>
    <div className={scss.balanceTitle}>Your Balance</div>
    <div className={scss.balanceNumber}>{balance}</div>
   </div>
   <AddButton/>
  </div>
   ) :(<div className={scss.balance}>
    <div className={scss.balanceMain}>
     <div className={scss.balanceTitle}>Your Balance</div>
     <div className={scss.balanceNumber}>{balance}</div>
    </div>
   </div>)}
   </>
  )}
  </Media>
 );
};