import { createSlice } from '@reduxjs/toolkit';
import {
  modalAddTransaction,
  modalEditTransaction,
  modalSuccessLogout,
  modalSuccessRegistration,
  modalSpliceTransaction,
} from './modalThunk';

const initialState = {
  modalTransaction: {
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
    builder.addCase(modalAddTransaction.fulfilled, (state, action) => {
      state.showAddTransaction = action.payload;
    });
    builder.addCase(modalEditTransaction.fulfilled, (state, action) => {
      state.showEditTransaction = action.payload;
    });
    builder.addCase(modalSuccessLogout.fulfilled, (state, action) => {
      state.showLogout = action.payload;
    });
    builder.addCase(modalSuccessRegistration.fulfilled, (state, action) => {
      state.showSuccessRegistration = action.payload;
    });
    builder.addCase(modalSpliceTransaction.fulfilled, (state, action) => {
      console.log(action.payload);
      state.modalTransaction = { ...state.modalTransaction, ...action.payload };
    });
  },
});

export const modalReducer = modalSlice.reducer;
