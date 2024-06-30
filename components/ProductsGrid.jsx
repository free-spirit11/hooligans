'use client';
import { useState, useEffect } from 'react';
import { fetchProducts } from '@/utils/requests';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ProductsGrid = ({ filter }) => {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const fetchedProducts = await fetchProducts(page, pageSize, filter);

        console.log(fetchedProducts);

        setProducts(fetchedProducts.products);
        setTotalItems(fetchedProducts.total);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      // do loading spinner later
      //   finally {
      //     setLoading(false);
      //   }
    };

    fetchProductsData();
  }, [page, pageSize, filter]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  return (
    <div>
      <Pagination
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
      <div className='grid grid-cols-3'>
        {products &&
          products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
      </div>
      <Pagination
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default ProductsGrid;
