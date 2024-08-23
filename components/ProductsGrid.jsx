'use client';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import { useProducts } from 'medusa-react';
import { getProductsFromMeilisearch } from '@/lib/meilisearch';

const ProductsGrid = ({ filter, searchQuery }) => {
  const [products, setProducts] = useState(null);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    async function fetchProducts(filter, page, pageSize) {
      const result = await getProductsFromMeilisearch(
        { ...filter, query: searchQuery },
        page,
        pageSize
      );
      console.log(result);
      setProducts(result.hits);
      setTotalItems(result.estimatedTotalHits);
    }
    fetchProducts(filter, page, pageSize);
  }, [filter, searchQuery, page, pageSize]);

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
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
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
