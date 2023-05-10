import * as React from 'react';
import css from './DiagramTab.module.scss';
import Chart from './Chart/Chart';
import Table from './Table/Table';
import { useAuth, useChart } from '../../hooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { transactionsSummary } from '../../redux/chart/chartThunk';

const DiagramTab = () => {
  const { chartCategories, chartColors, periodTotal, year, month } = useChart();
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      transactionsSummary({ walletId: user.wallets[0].id, year, month })
    );
  }, [dispatch, year, month, user]);

  return (
    <div className={css.container}>
      <Chart
        colors={chartColors}
        chartCategories={chartCategories}
        total={periodTotal}
      />
      <Table colors={chartColors} chartCategories={chartCategories} />
    </div>
  );
};

export default DiagramTab;
