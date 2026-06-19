import { useCallback, useState } from 'react';
import { getMeApi, getUsersApi, addUserApi, updateUserApi, deleteUserApi  } from "api/user";
import { useAuth } from './useAuth';


export function useUser() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [users, setUsers] = useState(null)
  const {auth} = useAuth();
  // llamamos al usuario
  const getMe = useCallback(async (token) => {
    try {
      const response = await getMeApi(token);
      return response;
    } catch (error) {

      throw error;
    }
  }, []); // sin dependencias, se crea solo una vez

  const getUsers = async () =>{
    try{
         setLoading(true);
         const response = await getUsersApi(auth.token);
         setLoading(false);
         setUsers(response)
    } catch (error){
        setLoading(false)
        setError(error)
    }
  };

  const addUser = async (data) =>{
    try{
           setLoading(true);
           await addUserApi(data, auth.token)
           setLoading(false);
    } catch (error){
           setLoading(false);
           setError(error)
    }
  }

const updateUser = async (id, data) => {
  try {
    setLoading(true);

    if (!data.password) {
      delete data.password;
    }
    //await updateUserApi(id, data, auth.token);
    await updateUserApi(id, data, auth.token);
    await getUsers(); // 🔥 clave
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

const  deleteUser = async (id) =>{
  try {
       setLoading(true);
       await deleteUserApi(id, auth.token);
       setLoading(false);
  } catch(error){
    setLoading(false);
    setError(error);
  }
};

  return { 
    loading,
    error,
    users,
    getUsers,
    getMe,
    addUser,
    updateUser,
    deleteUser
  };
}