import { useCallback } from 'react';
import { getMeApi } from "../api/user";

export function useUser() {
  const getMe = useCallback(async (token) => {
    try {
      const response = await getMeApi(token);
      return response;
    } catch (error) {
      throw error;
    }
  }, []); // sin dependencias, se crea solo una vez

  return { getMe };
}