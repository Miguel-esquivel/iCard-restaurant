import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export function useAuth() {
  const {auth, isLoading, login, logout} = useContext(AuthContext);
  return {auth, isLoading, login, logout};
}