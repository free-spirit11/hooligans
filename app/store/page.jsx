import Navbar from '@/components/Navbar';
import ProductsGrid from '@/components/ProductsGrid';
import React from 'react';

const StorePage = () => {
  return (
    <>
      <Navbar color='black' />
      <div className='flex-col pt-20 max-w-[70%] mx-auto space-y-5'>
        <div name='title'>
          <h1 className='mt-32 text-2xl '>All products</h1>
        </div>
        <div name='sorting, filters, pagination'>Sort Filter ...</div>
        <ProductsGrid />
      </div>
    </>
  );
};

export default StorePage;
