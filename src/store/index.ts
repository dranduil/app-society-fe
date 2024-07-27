import { configureStore, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import authReducer from '@/store/auth/authSlice';
import Cookies from 'js-cookie';

// Configure the store with the reducers
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Get the root state's type from the reducers
export type RootState = ReturnType<typeof store.getState>;

// Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

// Create a type for the store using RootState and Thunk enabled dispatch
export type AppStore = Omit<typeof store, "dispatch"> & {
  dispatch: AppThunkDispatch;
};

// Use the custom AppStore type for the store
export const appStore: AppStore = store as AppStore;

// Create custom hooks for dispatch and selector
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Subscribe to store to handle cookies
appStore.subscribe(() => {
  const state = appStore.getState().auth;
  if (state.token && state.refreshToken) {
    Cookies.set('token', state.token, { expires: 60 });
    Cookies.set('refreshToken', state.refreshToken, { expires: 60 });
  } else {
    Cookies.remove('token');
    Cookies.remove('refreshToken');
  }
});
