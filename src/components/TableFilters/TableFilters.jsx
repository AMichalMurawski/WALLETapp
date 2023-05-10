import React from 'react';
import Select from 'react-select';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import css from './TableFilters.module.scss';
import { selectStyles } from './SelectStyles';
import { useDispatch } from 'react-redux';
import { changeMonth, changeYear } from '../../redux/chart/chartThunk';
// import { useChart } from '../../hooks';

// const currentMonth = new Date().getMonth() + 1;
const months = Array.from({ length: 12 }, (item, i) => {
  return format(new Date(0, i), 'LLLL', {
    locale: pl,
  });
});

// const d = new Date();
// const name = months[d.getMonth()];

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
  // const { year, month } = useChart();

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
          placeholder={new Date().getMonth() + 1}
          onChange={handleMonth}
        />
      </div>
      <div className={css.select}>
        <Select
          styles={selectStyles}
          options={years}
          placeholder={new Date().getFullYear()}
          onChange={handleYear}
        />
      </div>
    </div>
  );
};
export default TableFilters;
