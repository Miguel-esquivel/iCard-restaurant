import { useState, useCallback } from "react";
import { getCategoriesApi, addCategoryApi } from "../api/category";
import { useAuth } from "./useAuth";

export function useCategory() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState(null);
  const { auth } = useAuth();

  const getCategories = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getCategoriesApi();
      setCategories(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addCategory = useCallback(async (data) => {
    try {
      setLoading(true);
      await addCategoryApi(data, auth.token);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [auth.token]);

  return {
    loading,
    error,
    categories,
    getCategories,
    addCategory,
  };
}