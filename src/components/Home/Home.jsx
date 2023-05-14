import { Helmet } from 'react-helmet';
import Table from '../utils/Table/Table';
import { AddButton } from '../utils/AddButton/AddButton';
import { useAuth, useWallet } from '../../hooks';
import scss from './Home.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTransactions } from '../../redux/wallet/walletThunk';

const Home = () => {
  const { user } = useAuth();
  const { transactions, changeTransactions } = useWallet();
  const dispatch = useDispatch();
  
  const getHeadings = () => {
    return Object.keys(...transactions).filter( key => key !== '_id');
  };

  useEffect(() => {
    dispatch(getTransactions({ walletId: user.wallets[0].id }));
  }, [changeTransactions, dispatch, user.wallets]);

  return (
    <>
      <Helmet>Home</Helmet>
      <div className={scss.statsMain}>
        {transactions.length>0 && (
          <div className={scss.statisticsTable}>
             
            <Table
              theadData={getHeadings()}
              tbodyData={transactions}
              className={'statisticsTable'}
            />
          </div>
        )}
        <div className={scss.addButton}>
          <AddButton />
        </div>
      </div>
    </>
  );
};

export default Home;
