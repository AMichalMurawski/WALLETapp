import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet-api.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:3030/api';
axios.defaults.withCredentials = true;

const STORAGE_ACCESS_TOKEN = 'accessToken';

axios.interceptors.request.use(
  config => {
    config.headers = {
      Authorization:
        'Bearer ' + JSON.parse(localStorage.getItem(STORAGE_ACCESS_TOKEN)),
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const setToken = token => {
  localStorage.setItem(STORAGE_ACCESS_TOKEN, JSON.stringify(token));
};

export const signup = createAsyncThunk(
  'auth/sign-up',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('auth/sign-up', credentials);
      setToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/sign-in',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('auth/sign-in', credentials);
      setToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signout = createAsyncThunk(
  'auth/sign-out',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('auth/sign-out');
      setToken('');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshTokens = createAsyncThunk(
  'auth/refresh-tokens',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('auth/refresh-tokens');
      setToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resendVerification = createAsyncThunk(
  'auth/verify',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/verify', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
