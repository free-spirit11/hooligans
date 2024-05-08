'use client';
import { useState, useEffect } from 'react';
import { fetchProducts } from '@/utils/requests';
import ProductCard from './ProductCard';

const ProductsGrid = () => {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(null);
  const [pageSize, setPageSize] = useState(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const fetchedProducts = await fetchProducts(page, pageSize);

        console.log(fetchedProducts);

        setProducts(fetchedProducts.products);
      } catch (error) {
        console.error('Error fetching products:', error);
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
