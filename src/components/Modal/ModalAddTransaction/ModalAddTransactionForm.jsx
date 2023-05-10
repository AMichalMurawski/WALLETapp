import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Datetime from 'react-datetime';
import { useEffect, useState } from 'react';

import 'react-datetime/css/react-datetime.css';

import { RiCalendar2Line } from 'react-icons/ri';
// import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
// import getDate from '../../../utils/getDate';
import scss from './ModalAddTransactionForm.module.scss';
// import { ModalAddTransactionFormMenu } from './ModalAddTransactionFormMenu/ModalAddTransactionFormMenu';
import { useAuth, useModal, useWallet } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../../redux/wallet/walletThunk';
import {
  modalAddTransaction,
  modalSpliceTransaction,
} from '../../../redux/modal/modalThunk';

let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;

const initialTransaction = {
  date: new Date().toLocaleDateString(),
  categoryId: 99,
  comment: '',
  sum: 0,
};

const schema = yup.object().shape({
  amount: yup
    .number()
    .test(val => {
      if (val !== undefined) {
        return patternTwoDigisAfterComma.test(val);
      }
      return true;
    })
    .min(0.01, 'Please, enter an amount min 0.01')
    .max(2500000, 'Please, enter an amount max 2500000!')
    .required('Amount is required'),

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

  const [open, setOpen] = useState(false);

  const today = new Date();
  const lastYear = new Date('December 31, 2022 23:59:59');
  const disableFutureDt = current => {
    return current.isBefore(today) && current.isAfter(lastYear);
  };

  useEffect(() => {
    dispatch(getCategories({ walletId: user.wallets[0].id }));
    dispatch(modalSpliceTransaction(initialTransaction));
  }, [changeTransactions]);

  const handleDate = e => {
    dispatch(modalSpliceTransaction({ date: e._d.toLocaleDateString() }));
    setOpen(false);
  };

  const handleCategoryId = e => {
    dispatch(modalSpliceTransaction({ categoryId: e.currentTarget.value }));
  };

  const handleSum = e => {
    dispatch(modalSpliceTransaction({ sum: e.currentTarget.value }));
  };

  const handleComment = e => {
    dispatch(modalSpliceTransaction({ comment: e.currentTarget.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(modalSpliceTransaction({ ...e.currentTarget.value }));
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

  const createValidateMessageAmount = r => {
    if (
      r === 'Please, enter an amount min 0.01' ||
      r === 'Please, enter an amount max 2500000!' ||
      r === 'Amount is required'
    ) {
      return <div className={scss.errorSum}>{r}</div>;
    }
    return (
      <div className={scss.errorSum}>
        Digits only, no more than two after the decimal point
      </div>
    );
  };

  console.log(modalTransaction.sum);

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
                  return <option value={e.id}>{e.name}</option>;
                }
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
              // autoComplete="off"
              onChange={handleSum}
            ></Field>
            <ErrorMessage
              className={scss.errorMessage}
              name="amount"
              component="div"
              render={createValidateMessageAmount}
            ></ErrorMessage>
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
              enableReinitialize={true}
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
