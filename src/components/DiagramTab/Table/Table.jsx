import * as React from 'react';
import css from './Table.module.scss';
import TableFilters from '../../TableFilters/TableFilters';
import { useChart } from '../../../hooks';

const Table = ({ colors, chartCategories }) => {
  const { incomeSummary, expenseSummary, periodTotal } = useChart();

  return (
    <>
      <div className={css.container}>
        <TableFilters />
        <ul className={css.listNames}>
          <li className={css.nameElement}>Category</li>
          <li className={css.nameElement}>Sum</li>
        </ul>

        <ul className={css.listTransaction}>
          {chartCategories.length > 0 ? (
            chartCategories.map((category, i) => {
              return (
                <li className={css.elementTransaction} key={category.id}>
                  <div
                    style={{
                      backgroundColor: `${colors[i]}`,
                      width: '24px',
                      minHeight: '24px',
                      marginRight: '15px',
                    }}
                  ></div>
                  <div className={css.category}>{category.name}</div>
                  <div className={css.sum}>{category.total}</div>
                </li>
              );
            })
          ) : (
            <li className={css.elementTransaction}>
              <div className={css.category}>Here is nothing </div>
            </li>
          )}
        </ul>

        <ul className={css.listAll}>
          <li className={css.elementListAll}>
            <div className={css.elementAllText}>Expenses :</div>
            <div className={css.elementAllCosts}>{expenseSummary}</div>
          </li>
          <li className={css.elementListAll}>
            <div className={css.elementAllText}>Income:</div>
            <div className={css.elementAllIncome}>{incomeSummary}</div>
          </li>
          <li className={css.elementListAll}>
            <div className={css.elementAllText}>Total:</div>
            <div className={css.elementAllIncome}>{periodTotal}</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Table;
