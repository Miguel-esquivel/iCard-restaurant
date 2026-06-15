import React, { useEffect, useRef } from 'react';
import { useAuth, useUser } from '../../hooks';
//import { HeaderPage } from '../../components'; 
import { HeaderPage } from '../../components/Admin/HeaderPage/HeaderPage';
import { TableUsers } from '../../components/Admin/Users/TableUsers';
import { Loader } from "semantic-ui-react";


export function UsersAdmin() {
  const { loading, users, getUsers } = useUser();
  const { auth } = useAuth();

  const hasFetched = useRef(false);

  useEffect(() => {
    if (auth?.token && !hasFetched.current) {
      getUsers();
      hasFetched.current = true;
    }
  }, [auth?.token, getUsers]);

  return (
    <>
      <HeaderPage title="Usuarios" 
      //btnTitle="Nuevo usuario"
      //btnTitleTwo="Eliminar usuario"
      />
      {loading ?(
       <Loader active inline="centered">
        Cargando...
       </Loader>
      ):(
        <TableUsers users={users}/>
      )}
    </>
  );
}