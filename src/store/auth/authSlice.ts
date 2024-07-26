import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '@/api/apiClient';
import { AxiosError } from 'axios';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  loading: false,
  error: null,
};

export interface ExceptionError {
    error:string,
    message:string,
}

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/api/login', credentials);
      return response.data;
    } catch (error: unknown) {
        if( error instanceof AxiosError)
        {
            return rejectWithValue(error.response?.data.message);
        }
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/api/signup', credentials);
      return response.data;
    } catch (error: unknown) {
      if( error instanceof AxiosError)
        {
            return rejectWithValue(error.response?.data.message);
        }
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;