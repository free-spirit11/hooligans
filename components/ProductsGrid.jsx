'use client';
import { useState, useEffect } from 'react';
// import { fetchProducts } from '@/utils/requests';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import { useProducts } from 'medusa-react';
import { getProductsFromMeilisearch } from '@/lib/meilisearch';

const ProductsGrid = ({ filter }) => {
  // const { products, isLoading, error } = useProducts({
  //   // q: 'black',
  // });
  const [products, setProducts] = useState(null);

  // const producten = getProductsFromMeilisearch({
  //   minPrice: filter.price.range[0],
  //   maxPrice: filter.price.range[1],
  // });
  // console.log(products);

  useEffect(() => {
    async function fetchProducts(filter) {
      const result = await getProductsFromMeilisearch(filter);
      console.log(result);
      setProducts(result.hits);
    }
    fetchProducts(filter);
  }, [filter]);

  // const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalItems, setTotalItems] = useState(0);

  // useEffect(() => {
  //   const fetchProductsData = async () => {
  //     try {
  //       const fetchedProducts = await fetchProducts(page, pageSize, filter);

  //       console.log(fetchedProducts);

  //       setProducts(fetchedProducts.products);
  //       setTotalItems(fetchedProducts.total);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //     // do loading spinner later
  //     //   finally {
  //     //     setLoading(false);
  //     //   }
  //   };

  //   fetchProductsData();
  // }, [page, pageSize, filter]);

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
