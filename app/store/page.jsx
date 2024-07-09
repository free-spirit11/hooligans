import Filters from '@/components/Filters';
import Navbar from '@/components/Navbar';
import React from 'react';

const StorePage = () => {
  return (
    <>
      <Navbar color='black' />
      <div className='pt-20 '>
        <Filters />
      </div>
    </>
  );
};

export default StorePage;
