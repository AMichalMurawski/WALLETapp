import { createSelector } from '@reduxjs/toolkit';

export const selectCategorySummary = state => state.chart.categorySummary;

export const selectIncomeSummary = state => state.chart.incomeSummary;

export const selectExpenseSummary = state => state.chart.expenseSummary;

export const selectPeriodTotal = state => state.chart.periodTotal;

export const selectYear = state => state.chart.year;

export const selectMonth = state => state.chart.month;

export const selectChartCategories = createSelector(
  [selectCategorySummary],
  chart => {
    if (chart.categorySummary) {
      return chart.categorySummary.filter(e => e.total > 0);
    }
    return [];
  }
);
