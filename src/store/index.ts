import { configureStore, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import authReducer from '@/store/auth/authSlice';
import profileReducer from '@/store/profile/profileSlice'

// import Cookies from 'js-cookie';

// Configure the store with the reducers
const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer
  },
});

// Get the root state's type from the reducers
export type RootState = ReturnType<typeof store.getState>;

// Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

// Create a type for the store using RootState and Thunk enabled dispatch
export type AppStore = Omit<typeof store, "dispatch"> & {
  dispatch: AppThunkDispatch;
};

// Use the custom AppStore type for the store
export const appStore: AppStore = store as AppStore;

// Create custom hooks for dispatch and selector
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;