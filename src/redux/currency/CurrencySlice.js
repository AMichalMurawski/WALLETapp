import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const currency_URL = 'http://api.nbp.pl/api/exchangerates/tables/C?format=json';

export const getCurrency = createAsyncThunk(
  'currency/getCurrency',
  async () => {
    const res = await fetch(currency_URL);
    return await res.json();
  }
);

const initialState = {
  currency: [],
  isLoading: false,
  error: null,
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: {
    [getCurrency.pending](state) {
      state.isLoading = true;
    },
    [getCurrency.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.currency = action.payload[0].rates;
    },
    [getCurrency.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default currencySlice.reducer;
