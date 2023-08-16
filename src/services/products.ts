
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types';

const apiBaseUrl = 'https://fakestoreapi.com'; 

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

export const { useFetchProductsQuery } = productsApi; 
