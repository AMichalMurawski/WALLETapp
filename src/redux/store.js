import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice.js';
import { modalReducer } from './modal/modalSlice';
import { walletReducer } from './wallet/walletSlice';
import { chartReducer } from './chart/chartSlice.js';
import currencyReducer from './currency/CurrencySlice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    modal: modalReducer,
    wallet: walletReducer,
    chart: chartReducer,
    currency: currencyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
