import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Datetime from 'react-datetime';
import { useEffect } from 'react';

import 'react-datetime/css/react-datetime.css';

import { RiCalendar2Line } from 'react-icons/ri';
import scss from './ModalAddTransactionForm.module.scss';
import { useAuth, useModal, useWallet } from '../../../hooks';
import { useDispatch } from 'react-redux';
import {
  addTransaction,
  getCategories,
} from '../../../redux/wallet/walletThunk';
import {
  modalShowAddTransaction,
  modalSpliceTransaction,
} from '../../../redux/modal/modalThunk';

const initialTransaction = {
  date: new Date().toLocaleDateString(),
  type: 'expense',
  categoryId: 99,
  comment: '',
  sum: 0,
};

const schema = yup.object().shape({
  comment: yup
    .string()
    .trim()
    .max(100, 'Maximum 100 symbols')
    .matches(/(^[а-яА-ЯёЁa-zA-ZЇїІіЄєҐґ ]+$)/u, 'Please, enter only letters'),
});
const initialValues = {
  amount: '',
  comment: '',
};

export const ModalAddTransactionForm = ({ onClick }) => {
  const { modalTransaction } = useModal();
  const { categories, changeTransactions } = useWallet();
  const dispatch = useDispatch();
  const { user } = useAuth();

  const today = new Date();
  const lastYear = new Date('December 31, 2022 23:59:59');
  const disableFutureDt = current => {
    return current.isBefore(today) && current.isAfter(lastYear);
  };

  useEffect(() => {
    dispatch(getCategories({ walletId: user.wallets[0].id }));
    dispatch(modalSpliceTransaction(initialTransaction));
  }, [dispatch, user, changeTransactions]);

  const handleDate = e => {
    dispatch(modalSpliceTransaction({ date: e._d.toLocaleDateString() }));
  };

  const handleCategoryId = e => {
    dispatch(
      modalSpliceTransaction({ categoryId: e.currentTarget.value.toString() })
    );
  };

  const handleSum = e => {
    const val = e.currentTarget.value;
    if (val === undefined) return;
    if (isNaN(val)) return;
    if (Math.round(val * 100) !== val * 100) return;
    if (val < 0) return;
    if (val > 2500000) return;

    dispatch(modalSpliceTransaction({ sum: e.currentTarget.value }));
  };

  const handleComment = e => {
    dispatch(modalSpliceTransaction({ comment: e.currentTarget.value }));
  };

  const handleSubmit = e => {
    dispatch(
      addTransaction({
        walletId: user.wallets[0].id,
        transaction: modalTransaction,
      })
    );
    dispatch(modalShowAddTransaction(false));
  };

  const renderCalendarInput = (props, openCalendar) => {
    return (
      <div className={scss.dataBox}>
        <Field
          {...props}
          className={scss.addFormInputDate}
          type="text"
          placeholder="date"
          name="date"
          autoComplete="off"
          value={modalTransaction.date}
          readOnly
        ></Field>
        <button className={scss.dataBtn} type="button" onClick={openCalendar}>
          <RiCalendar2Line className={scss.dataBtnIcon}></RiCalendar2Line>
        </button>
      </div>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={scss.addForm}>
        <div className={scss.addFormInputContainer}>
          <label className={scss.categoryLabel}>
            <Field
              className={scss.addFormInputCategory}
              as="select"
              placeholder="Select a category"
              name="category"
              onChange={handleCategoryId}
            >
              {categories.map((e, i, array) => {
                if (e.type[0] === modalTransaction.type) {
                  return (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  );
                }
                return null;
              })}
            </Field>
          </label>
          <label className={scss.sumBox}>
            <Field
              className={scss.addFormInputSum}
              type="text"
              placeholder="0.00"
              enableReinitialize={true}
              value={modalTransaction.sum}
              name="amount"
              onChange={handleSum}
            ></Field>
          </label>
          <label className={scss.dateBox}>
            <Datetime
              timeFormat={false}
              renderInput={renderCalendarInput}
              isValidDate={disableFutureDt}
              dateFormat="DD.MM.YYYY"
              closeOnSelect={true}
              initialValue={new Date()}
              onChange={handleDate}
            />
          </label>
          <label className={scss.commentBox}>
            <Field
              className={scss.addFormTextarea}
              name="comment"
              component="textarea"
              placeholder="Comment"
              value={modalTransaction.comment}
              onKeyPress={e => {
                if (e.charCode === 13) {
                  e.preventDefault();
                }
              }}
              onChange={handleComment}
            ></Field>
            <ErrorMessage
              className={scss.errorMessage}
              name="comment"
              component="div"
              render={r => {
                return <div className={scss.errorComment}>{r}</div>;
              }}
            ></ErrorMessage>
          </label>
        </div>
        <button type="submit" className={scss.addBtn}>
          Add
        </button>
      </Form>
    </Formik>
  );
};
