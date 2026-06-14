
import React, { createContext, useState, useCallback, useMemo } from 'react';
import { setToken, removeToken } from '../api/token';
import { useUser } from '../hooks/useUser';

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);
  const { getMe } = useUser();

  const login = useCallback(async (accessToken) => {
    try {
      // Guardar token en localStorage
      setToken(accessToken);

      // Obtener datos del usuario
      const me = await getMe(accessToken);

      // Guardar información de autenticación
      setAuth({
        token: accessToken,
        me,
      });

    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }, [getMe]);

  const logout = useCallback(() => {
    removeToken();

    setAuth(undefined);
  }, []);

  const valueContext = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth, login, logout]
  );

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  );
}