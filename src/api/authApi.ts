import apiClient from '@/api/apiClient';

interface AuthResponse {
  token: string;
  refreshToken: string;
}

export const loginApi = async (username: string, password: string): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>('/login', { username, password });
  return response.data;
};
