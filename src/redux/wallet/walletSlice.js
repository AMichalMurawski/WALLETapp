import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getCategories,
  getTransactions,
} from './walletThunk';

const initialState = {
  id: null,
  balance: 0,
  transactions: [],
  categories: [],
  summary: null,
  changeTransactions: false,
  isRefreshing: false,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  extraReducers: builder => {
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload.transactions;
      state.balance = action.payload.balance;
      state.changeTransactions = false;
    });
    builder.addCase(addTransaction.fulfilled, (state, action) => {
      state.transactions.push(action.payload.transaction);
      state.balance = action.payload.balance;
      state.changeTransactions = true;
    });
    builder.addCase(editTransaction.fulfilled, (state, action) => {
      const transactions = state.transactions;
      const transaction = action.payload.transaction;
      transactions.forEach((e, i) => {
        if (e._id === transaction._id) {
          transactions.splice(i, 1, transaction);
        }
      });
      state.transactions = transactions;
      state.balance = action.payload.balance;
      state.changeTransactions = true;
    });
    builder.addCase(deleteTransaction.fulfilled, (state, action) => {
      const i = state.transactions.findIndex(
        transaction => transaction._id === action.payload.transactionId
      );
      state.transactions.splice(i, 1);
      state.balance = action.payload.balance;
      state.changeTransactions = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const walletReducer = walletSlice.reducer;
