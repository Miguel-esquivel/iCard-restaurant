import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export function useAuth() {
  const {auth, login, logout} = useContext(AuthContext);
  return {auth, login, logout};
}