import { useSelector } from 'react-redux';
import {
  selectCategorySummary,
  selectIncomeSummary,
  selectExpenseSummary,
  selectPeriodTotal,
  selectYear,
  selectMonth,
  selectChartCategories,
  selectChartColors,
} from '../redux/chart/selectors';

export const useChart = () => {
  const categorySummary = useSelector(selectCategorySummary);
  const chartCategories = useSelector(selectChartCategories);
  const chartColors = useSelector(selectChartColors);
  const incomeSummary = useSelector(selectIncomeSummary);
  const expenseSummary = useSelector(selectExpenseSummary);
  const periodTotal = useSelector(selectPeriodTotal);
  const year = useSelector(selectYear);
  const month = useSelector(selectMonth);
  return {
    categorySummary,
    chartCategories,
    chartColors,
    incomeSummary,
    expenseSummary,
    periodTotal,
    year,
    month,
  };
};
