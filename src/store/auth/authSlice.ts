import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import apiClient from '@/api/apiClient';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';


interface AuthState {
  token: string | undefined | null;
  refreshToken: string | undefined | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const token = Cookies.get('token');
const refreshToken = Cookies.get('refreshToken');
const initialState: AuthState = {
  token: token || null,
  refreshToken: refreshToken || null,
  loading: false,
  error: null,
  isAuthenticated: !!token,
};

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (tokens: { token: string; refreshToken: string}) => {
    return tokens;
  }
);

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
  async (credentials: { name:string, surname:string, email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/api/sign-up', credentials);
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
        console.log(action.payload)
        state.token = action.payload.access_token;
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
      })
      .addCase(checkAuth.fulfilled, (state, action: PayloadAction<{ token: string; refreshToken: string }>) => {
        const { token, refreshToken } = action.payload;
        state.token = token;
        state.refreshToken = refreshToken;
        state.isAuthenticated = !!token;
      });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;