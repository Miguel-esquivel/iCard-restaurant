import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import { setToken, removeToken, getToken } from '../api/token';
import { useUser } from '../hooks/useUser';

export const AuthContext = createContext({
  auth: null,
  isLoading: true,
  login: () => null,
  logout: () => null,
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getMe } = useUser();

  useEffect(() => {
    (async () => {
      const token = getToken();

      if (token) {
        try {
          const me = await getMe(token);
          setAuth({ token, me });
        } catch (error) {
          console.error(error);
          removeToken();
          setAuth(null);
        }
      } else {
        setAuth(null);
      }

      setIsLoading(false);
    })();
  }, [getMe]);

  const login = useCallback(async (accessToken) => {
    try {
      setToken(accessToken);
      const me = await getMe(accessToken);
      setAuth({ token: accessToken, me });
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }, [getMe]);

  const logout = useCallback(() => {
    removeToken();
    setAuth(null);
  }, []);

  const valueContext = useMemo(
    () => ({ auth, isLoading, login, logout }),
    [auth, 
      isLoading, 
      login, 
      logout]
  );

  //if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  );
}