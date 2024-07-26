import React, { createContext, useState, useContext, ReactNode } from 'react';
import { loginApi } from '../api/authApi';

interface Auth {
  token: string;
  refreshToken: string;
}

interface AuthContextProps {
  auth: Auth;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: () => boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth>({
    token: '',
    refreshToken: ''
  });

  const login = async (username: string, password: string) => {
    try {
      const data = await loginApi(username, password);
      setAuth({
        token: data.token,
        refreshToken: data.refreshToken
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    setAuth({
      token: '',
      refreshToken: ''
    });
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  };

  const isLoggedIn = () => !!auth.token;

  return (
    <AuthContext.Provider value={{ auth, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
