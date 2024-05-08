'use client';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import { fetchProducts } from '@/utils/requests';
import AutoScrollContainer from './AutoScrollContainer';

const Exhibition = ({ heading }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts.products);
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
    <section>
      <div>
        <div className='inline-flex justify-between w-full p-10'>
          <h1 className='flex items-center text-2xl'>{heading}</h1>
          <Link href='/store'>
            <button className='px-5 py-3 border border-gray-900 hover:bg-gray-500 hover:bg-opacity-10'>
              <span>Shop all</span>
            </button>
          </Link>
        </div>
        <AutoScrollContainer>
          {products &&
            products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
        </AutoScrollContainer>
      </div>
    </section>
  );
};

export default Exhibition;
