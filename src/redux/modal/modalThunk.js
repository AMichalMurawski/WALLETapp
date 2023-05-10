import { createAsyncThunk } from '@reduxjs/toolkit';

export const modalAddTransaction = createAsyncThunk(
  'modal/addTransaction',
  async (boolean, thunkAPI) => {
    try {
      return boolean;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const modalEditTransaction = createAsyncThunk(
  'modal/editTransaction',
  async (boolean, thunkAPI) => {
    try {
      return boolean;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const modalSuccessLogout = createAsyncThunk(
  'modal/successLogout',
  async (boolean, thunkAPI) => {
    try {
      return boolean;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const modalSuccessRegistration = createAsyncThunk(
  'modal/successRegistration',
  async (boolean, thunkAPI) => {
    try {
      return boolean;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
