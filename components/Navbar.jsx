'use client';
import logo from '@/assets/images/logo-white.svg';
import accountIcon from '@/assets/images/account-icon.svg';
import wishlistIcon from '@/assets/images/wishlist-icon.svg';
import cartIcon from '@/assets/images/cart-icon.svg';
import menuIcon from '@/assets/images/menu-icon.svg';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';
import SearchBar from './SearchBar';

// Thinking to add a prop which would tell if all the svg elements are white or black, to change it on the main page being transparent and white text and on other pages being white with black text
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <nav className='grid grid-cols-3 place-items-center w-full'>
    <nav className='absolute z-10 flex justify-between items-center w-full py-4 px-10 pt-7'>
      {!isMenuOpen ? (
        <button
          type='button'
          id='menu-dropdown-button'
          className='relative inline-flex items-center justify-center rounded-md p-2 hover:bg-black hover:bg-opacity-10'
          aria-controls='menu'
          aria-expanded='false'
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Image className='' src={menuIcon} alt='menu' />
          <span className='text-white px-3'>Menu</span>
        </button>
      ) : (
        <div className='px-12 m-1'></div>
      )}

      <div className=''>
        <Link className='' href='/'>
          <Image
            className='w-60 transform translate-x-7'
            src={logo}
            alt='Hooligans'
          />
        </Link>
      </div>
      <div className='flex items-center space-x-8'>
        <div className='relative' href='/'>
          <SearchBar />
        </div>
        <Link className='' href='/'>
          <Image className='' src={accountIcon} alt='account' />
        </Link>
        <Link className='' href='/'>
          <Image className='' src={wishlistIcon} alt='wishlist' />
        </Link>
        <Link className='' href='/'>
          <Image className='' src={cartIcon} alt='cart' />
        </Link>
      </div>
      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  );
};

export default Navbar;
