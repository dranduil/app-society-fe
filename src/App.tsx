import  { useEffect } from 'react';
import {  useAppDispatch } from '@/store';
import Navigation from '@/components/navigation';
import { checkAuth } from '@/store/auth/authSlice';
import Cookies from 'js-cookie';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token:string = Cookies.get('token');
    const refreshToken:string = Cookies.get('refreshToken');
    if (token && refreshToken) {
      dispatch(
        checkAuth({ token, refreshToken })
      );
    }
  }, [dispatch]);

  return (
      <Navigation />
  );
}

export default App;
