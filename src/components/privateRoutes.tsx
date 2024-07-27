import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/store';

const PrivateRoutes = () => {
  const { token } = useAppSelector((state) => state.auth);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
