
import React from 'react';
// import { useFetchProductsQuery } from '../services/products';
import { useFetchProductsQuery } from '../services/products'; 
import CardComponent from '../components/CardComponent/CardComponent';


const ProductPage: React.FC = () => {
  const { data: products, isLoading, isError } = useFetchProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (isError) {
    return <div>Error fetching products.</div>; 
  }

  return (
    <div>
      <h1>Product Page</h1>
      <div>
        {products.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
