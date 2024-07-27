import { configLocal } from '@/config/enviroments';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: configLocal.apiUrl, // Sostituisci con il tuo endpoint API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
