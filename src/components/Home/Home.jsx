import { Helmet } from 'react-helmet';
import Table from '../utils/Table/Table';
import { useAuth, useWallet } from '../../hooks';
import scss from './Home.module.scss';
import data from '../../data.json';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTransactions } from '../../redux/wallet/walletThunk';

const Home = () => {
  const { user } = useAuth();
  const { transactions } = useWallet();
  const dispatch = useDispatch();

  const dataJson = data[0].data;
  const getHeadings = () => {
    return Object.keys(...dataJson);
  };

  useEffect(() => {
    dispatch(getTransactions({ walletId: user.wallets[0].id }));
  }, [dispatch, user.wallets]);

  return (
    <>
      <Helmet>Home</Helmet>
      <div className={scss.statsMain}>
        {dataJson && (
          <div className={scss.statisticsTable}>
             
            <Table
              theadData={getHeadings()}
              tbodyData={transactions}
              className={'statisticsTable'}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
