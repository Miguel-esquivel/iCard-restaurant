import React, { useEffect, useState } from 'react'
import { HeaderPage } from '../../components/Admin/HeaderPage/HeaderPage';
import { TableProductAdmin } from '../../components/Admin/Product/TableProductAdmin';
import { AddEditProductForm } from '../../components/Admin/Product';
import { ModalBasic } from "../../components/Common";
import { useProduct } from '../../hooks';
import { Loader } from 'semantic-ui-react';

export function ProductAdmin() {
      const [ showModal, setShowModal ] = useState(false);
      const [ titleModal, setTitleModal ] = useState(null);
      const [ contentModal, setContentModal ] = useState(null);
      const { loading, products, getProducts, deleteProduct } = useProduct ();
      const [ refetch, setRefetch] = useState(false);
  
  useEffect(() => {
    getProducts();
  }, [refetch, getProducts]);

    const  openCloseModal = () => setShowModal(prev => !prev);
    const onRefetch = () => setRefetch((prev) => !prev);

     const addProduct = () =>{
           setTitleModal("Nuevo producto");
           setContentModal(<AddEditProductForm onClose={openCloseModal} onRefetch={onRefetch}/>);
           openCloseModal();
      };


      const updateProduct = (data) =>{
        setTitleModal("Actualizar producto");
        setContentModal(<AddEditProductForm onClose={openCloseModal} onRefetch={onRefetch} product={data}/>);
        openCloseModal();
      }

      const OnDeleteProduct = async (data) =>{
        const result = window.confirm(`¿Desea eliminar el producto ${data.title}?`);
        if(result){
          await deleteProduct(data.id);
          onRefetch();
        }
      }

  return (
    <>
      <HeaderPage title="Productos" btnTitle="Nuevo producto" btnClick={addProduct} />
      {loading ? (
        <Loader active inline="centered">
           Cargando...
        </Loader>
      ) : (
        <TableProductAdmin products={products} updateProduct={updateProduct} deleteProduct={OnDeleteProduct}/>
      )}
      <ModalBasic show={showModal} onClose={openCloseModal} title={titleModal} children={contentModal}/>
    </>
  )
}
