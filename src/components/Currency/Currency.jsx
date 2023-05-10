import scss from './Currency.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrency } from '../../redux/currency/CurrencySlice';
import React, { useEffect } from 'react';

export const Currency = () => {
  const { currency } = useSelector(state => state.currency);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  if (currency.length > 0) {
    const currencyData = currency;

    return (
      <>
        {currency.length > 0 && (
          <div className={scss.mainCurrencyComp}>
            <div className={scss.mainTable}>
              <table className={scss.tableCurrency}>
                <tbody>
                  <tr className={scss.tableHead}>
                    <th>Currency</th>
                    <th>Purchase</th>
                    <th>Sale</th>
                  </tr>

                  <tr className={scss.tableTr}>
                    <td>{currencyData[0].code}</td>
                    <td>{currencyData[0].ask}</td>
                    <td>{currencyData[0].bid}</td>
                  </tr>
                  <tr className={scss.tableTr}>
                    <td>{currencyData[3].code}</td>
                    <td>{currencyData[3].ask}</td>
                    <td>{currencyData[3].bid}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </>
    );
  }
};
