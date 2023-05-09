import * as React from 'react';
import css from './DiagramTab.module.scss';
import Chart from './Chart/Chart';
import Table from './Table/Table';
import { useChart } from '../../hooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { transactionsSummary } from '../../redux/chart/chartThunk';
import { useState } from 'react';

const rainbowColors = nr => {
  let colors = [];
  for (let i = 0; i < nr; i++) {
    colors.push('hsl(' + (360 * i) / nr + ',80%,50%)');
  }
};

const DiagramTab = () => {
  const [colors, setColors] = useState();
  const { chartCategories, year, month } = useChart();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsSummary());
  }, [dispatch, year, month]);

  useEffect(() => {
    if (chartCategories) {
      setColors(rainbowColors(chartCategories.length));
    } else {
      setColors([]);
    }
  }, [chartCategories]);

  return (
    <div className={css.container}>
      <Chart colors={colors} />
      <Table colors={colors} />
    </div>
  );
};

export default DiagramTab;
