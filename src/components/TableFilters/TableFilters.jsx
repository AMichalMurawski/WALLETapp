import React, { useEffect } from 'react';
import Select from 'react-select';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import css from './TableFilters.module.scss';
import { selectStyles } from './SelectStyles';
import { useDispatch } from 'react-redux';
import { changeMonth, changeYear } from '../../redux/chart/chartThunk';

// const currentMonth = new Date().getMonth() + 1;
const months = Array.from({ length: 12 }, (item, i) => {
  return format(new Date(0, i), 'LLLL', {
    locale: pl,
  });
});

const monthOptions = Array(12)
  .fill(null)
  .map((item, index) => ({ value: index, label: months[index] }));

const currentYear = new Date().getFullYear();
const years = [];
for (let i = currentYear; i >= 1999; i--) {
  years.push({ value: i, label: i.toString() });
}

const TableFilters = () => {
  const dispatch = useDispatch();

  const handleMonth = e => {
    dispatch(changeMonth(e.value));
  };

  const handleYear = e => {
    dispatch(changeYear(e.value));
  };

  return (
    <div className={css.selectContainer}>
      <div className={css.select}>
        <Select
          styles={selectStyles}
          options={monthOptions}
          placeholder="Month"
          onChange={handleMonth}
        />
      </div>
      <div className={css.select}>
        <Select
          styles={selectStyles}
          options={years}
          placeholder="Year"
          onChange={handleYear}
        />
      </div>
    </div>
  );
};
export default TableFilters;
