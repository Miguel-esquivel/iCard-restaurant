import React, {useEffect} from 'react';
import { useUser } from '../../hooks';

export function UsersAdmin() {
  const { users, getUsers} = useUser();

  console.log(users);

  useEffect(() =>{
    getUsers();
  }, []);

  return (
    <div>
         <h1>Estamos en Users Admin</h1>
    </div>
  );
}
