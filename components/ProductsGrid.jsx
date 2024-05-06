'use client';
import { useState, useEffect } from 'react';
import { fetchProducts } from '@/utils/requests';
import ProductCard from './ProductCard';

const ProductsGrid = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
      // do loading spinner later
      //   finally {
      //     setLoading(false);
      //   }
    };
    if (products === null) {
      fetchProductsData();
    }
  }, []);

  return (
    <div className='grid grid-cols-3'>
      {products &&
        products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
    </div>
  );
};

export default ProductsGrid;
