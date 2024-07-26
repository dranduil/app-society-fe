import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Sostituisci con il tuo endpoint API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
