import { useState, useCallback } from "react";
import { getProductApi, addProductApi, updateProductApi, deleteProductApi } from "../api/product";
import { useAuth } from "./useAuth";


export function useProduct (){
    const [ loading, setLoading ] = useState(true);
    const [ error,  setError ] = useState(false);
    const [ products, setProducts ] = useState(null);
    const { auth } = useAuth();

      const getProducts = useCallback(async () => {
        try {
          setLoading(true);
          const response = await getProductApi();
          setProducts(response);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, []);

      const addProduct = async (data) => {
        try {
          setLoading(true); 
          await addProductApi(data, auth.token);
          setLoading(false);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      const updateProduct = async (id, data) => {
        try {
          setLoading(true);
          await updateProductApi(id, data, auth.token);
          setLoading(false);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      const deleteProduct = async (id, data) => {
        try {
          setLoading(true);
          await deleteProductApi(id, auth.token);
          setLoading(false);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

    return {
        loading,
        error,
        products,
        getProducts,
        addProduct,
        updateProduct,
        deleteProduct,
    };
 }