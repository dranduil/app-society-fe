import { configLocal } from '@/config/enviroments';
import axios from 'axios';
import Cookies from 'js-cookie';

const apiClient = axios.create({
  baseURL: configLocal.apiUrl, // Sostituisci con il tuo endpoint API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Añadir un interceptor para modificar los encabezados antes de enviar la solicitud
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') ?? Cookies.get('token')
  if(token){
    // Agregar encabezados adicionales aquí
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;
