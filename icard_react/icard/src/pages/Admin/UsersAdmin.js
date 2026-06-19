import React, { useEffect, useRef, useState } from 'react';
import { useAuth, useUser } from '../../hooks';
//import { HeaderPage } from '../../components'; 
import { HeaderPage } from '../../components/Admin/HeaderPage/HeaderPage';
import { TableUsers } from '../../components/Admin/Users/TableUsers';
import { AddEditUserForm } from '../../components/Admin/Users/AddEditUserForm';
import { ModalBasic } from "../../components/Common";
import { Loader } from "semantic-ui-react";


export function UsersAdmin() {
  const { loading, users, getUsers, deleteUser } = useUser();
  const [ showModal, setShowModal ] = useState(false);
  const [ titleModal, setTitleModal ] = useState(null);
  const [ refetch, setRefetch ] = useState(false);
  const [ contentModal, setContentModal ] = useState(null);
  const { auth } = useAuth();

  const hasFetched = useRef(false);

  useEffect(() => {
    if (auth?.token && !hasFetched.current) {
      getUsers();
      hasFetched.current = true;
    }
  }, [auth?.token, getUsers, refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addUser = () => { 
     setTitleModal("Nuevo usuario");
     setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch}/>);
     openCloseModal();
  };

  const updateUser = (data) => {
    setTitleModal("Actualizar usuario");
    setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} user={data}/>);
    openCloseModal();
  }

  const onDeleteUser = async (data) => {
    const result = window.confirm(`¿Eliminar usuario ${data.email}?`);
    if (result){
      try{

      await deleteUser(data.id);
      onRefetch();

      } catch (error){
        console.error(error);
      }


    }
  };

  return (
    <>
      <HeaderPage 
      title="Usuarios" 
      btnTitle="Nuevo usuario" 
      btnClick={addUser}
      />
      {loading ? (
       <Loader active inline="centered">
        Cargando...
       </Loader>
      ) : (
        <TableUsers 
        users={users} 
        updateUser={updateUser}
        onDeleteUser={onDeleteUser}
        />
      )}

      <ModalBasic 
      show={showModal} 
      onClose={openCloseModal}
      title={titleModal}
      children={contentModal}
      />
    </>
  );
}