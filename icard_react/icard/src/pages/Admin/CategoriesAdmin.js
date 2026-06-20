import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import { HeaderPage } from '../../components/Admin/HeaderPage/HeaderPage';
import { TableCategoryAdmin } from '../../components/Admin/Category';
import { AddEditCategoryForm } from '../../components/Admin/Category';
import { useCategory } from '../../hooks';
import { ModalBasic } from "../../components/Common";

export function CategoriesAdmin() {
  const [ showModal, setShowModal ] = useState(false);
  const [ titleModal, setTitleModal ] = useState(null);
  const [ contentModal, setContentModal ] = useState(null);
  const [ refetch, setRefetch] = useState(false);
  const { loading, categories, getCategories } = useCategory();

useEffect(() => {
  getCategories();
}, [refetch, getCategories]);

  const  openCloseModal = () => setShowModal(prev => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addCategory = () =>{
       setTitleModal("Nueva categoria");
       setContentModal(<AddEditCategoryForm onClose={openCloseModal} onRefetch={onRefetch}/>);
       openCloseModal();
  };

  const updateCategory = (data) => {
    setTitleModal("Actualizar categoria");
    setContentModal(
      <AddEditCategoryForm 
      onClose={openCloseModal} 
      onRefetch={onRefetch} 
      category={data}
      />
    );
    openCloseModal();
  };

  return (
    <>
      <HeaderPage
        title="Categorias"
        btnTitle="Nueva categoria"
        btnClick={addCategory}
      />

      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        
          <TableCategoryAdmin 
          categories={categories}
          updateCategory={updateCategory}
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