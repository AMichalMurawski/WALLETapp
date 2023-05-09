import { useSelector } from 'react-redux';
import {
  selectCategorySummary,
  selectIncomeSummary,
  selectExpenseSummary,
  selectPeriodTotal,
  selectYear,
  selectMonth,
  selectChartCategories,
} from '../redux/chart/selectors';

export const useChart = () => {
  const categorySummary = useSelector(selectCategorySummary);
  const chartCategories = useSelector(selectChartCategories);
  const incomeSummary = useSelector(selectIncomeSummary);
  const expenseSummary = useSelector(selectExpenseSummary);
  const periodTotal = useSelector(selectPeriodTotal);
  const year = useSelector(selectYear);
  const month = useSelector(selectMonth);
  return {
    categorySummary,
    chartCategories,
    incomeSummary,
    expenseSummary,
    periodTotal,
    year,
    month,
  };
};
