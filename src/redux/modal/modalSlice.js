import { createSlice } from '@reduxjs/toolkit';
import {
  modalShowAddTransaction,
  modalShowEditTransaction,
  modalShowSuccessLogout,
  modalShowSuccessRegistration,
  modalSpliceTransaction,
} from './modalThunk';

const initialState = {
  modalTransaction: {
    id: null,
    date: new Date().toLocaleDateString(),
    type: 'expense',
    categoryId: 99,
    comment: '',
    sum: 0,
  },
  showAddTransaction: false,
  showEditTransaction: false,
  showLogout: false,
  showSuccessRegistration: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  extraReducers: builder => {
    builder.addCase(modalShowAddTransaction.fulfilled, (state, action) => {
      state.showAddTransaction = action.payload;
    });
    builder.addCase(modalShowEditTransaction.fulfilled, (state, action) => {
      state.showEditTransaction = action.payload;
    });
    builder.addCase(modalShowSuccessLogout.fulfilled, (state, action) => {
      state.showLogout = action.payload;
    });
    builder.addCase(modalShowSuccessRegistration.fulfilled, (state, action) => {
      state.showSuccessRegistration = action.payload;
    });
    builder.addCase(modalSpliceTransaction.fulfilled, (state, action) => {
      state.modalTransaction = { ...state.modalTransaction, ...action.payload };
    });
  },
});

export const modalReducer = modalSlice.reducer;
