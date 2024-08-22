'use client';
import Filters from '@/components/Filters';
import Navbar from '@/components/Navbar';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const StorePage = () => {
  const searchParams = useSearchParams();
  const searchResults = searchParams.get('search');
  return (
    <>
      <Navbar color='black' />
      <div className='pt-20 '>
        <p>{searchResults}</p>
        <Filters />
      </div>
    </>
  );
};

export default StorePage;
