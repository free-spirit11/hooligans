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
import ShoppingBag from './ShoppingBag';

// Thinking to add a prop which would tell if all the svg elements are white or black, to change it on the main page being transparent and white text and on other pages being white with black text
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);

  return (
    <nav className='absolute z-10 flex items-center justify-between w-full px-10 py-4 pt-7'>
      {!isMenuOpen ? (
        <button
          type='button'
          id='menu-dropdown-button'
          className='relative inline-flex items-center justify-center p-2 rounded-md hover:bg-black hover:bg-opacity-10'
          aria-controls='menu'
          aria-expanded='false'
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Image className='' src={menuIcon} alt='menu' />
          <span className='px-3 text-white'>Menu</span>
        </button>
      ) : (
        <div className='px-12 m-1'></div>
      )}

      <div
        style={{
          position: 'absolute',
          right: '50%',
          transform: 'translateX(84px)',
        }}
      >
        <Link href='/'>
          <Image
            className='transform w-60 translate-x-7'
            src={logo}
            alt='Hooligans'
          />
        </Link>
      </div>
      <div className='flex items-center space-x-8'>
        <div className='relative' href='/'>
          <SearchBar />
        </div>
        <button name='account'>
          <svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              id='Union'
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M12.5 4.5C12.5 6.74 10.74 8.5 8.5 8.5C6.26 8.5 4.5 6.74 4.5 4.5C4.5 2.26 6.26 0.5 8.5 0.5C10.74 0.5 12.5 2.26 12.5 4.5ZM10.9 4.5C10.9 3.14 9.86 2.1 8.5 2.1C7.14 2.1 6.1 3.14 6.1 4.5C6.1 5.86 7.14 6.9 8.5 6.9C9.86 6.9 10.9 5.86 10.9 4.5ZM0.660156 16.5001C1.38016 12.8201 4.66016 10.1001 8.50016 10.1001C12.3402 10.1001 15.6202 12.8201 16.3402 16.5001H14.6602C13.9402 13.7801 11.4602 11.7001 8.50016 11.7001C5.54016 11.7001 3.06016 13.7801 2.34016 16.5001H0.660156Z'
              fill='white'
            />
          </svg>
        </button>
        <button name='wishlist'>
          <svg
            width='17'
            height='15'
            viewBox='0 0 17 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              id='Vector'
              d='M8.43009 14.681L1.63858 7.88951C0.120474 6.2116 0.120474 3.6548 1.63858 2.0568C2.43758 1.1779 3.47628 0.618595 4.67478 0.538695C5.87328 0.458795 6.99188 0.858296 7.87079 1.5774L8.43009 2.1367L8.98939 1.5774C10.6673 -0.100506 13.3839 -0.100506 15.1417 1.5774C16.0206 2.3764 16.5 3.495 16.5 4.6935C16.5 5.892 16.1005 7.0106 15.3015 7.88951L8.43009 14.681ZM4.91448 2.1367C4.83458 2.1367 4.75468 2.1367 4.75468 2.1367C3.95568 2.1367 3.31648 2.5362 2.83708 3.0955C1.87828 4.1342 1.87828 5.7322 2.83708 6.77091L8.43009 12.3639L14.103 6.77091C14.5824 6.2116 14.902 5.4925 14.902 4.7734C14.902 4.0543 14.5025 3.2553 13.9432 2.7759C12.9045 1.7372 11.2266 1.7372 10.1879 2.696L8.43009 4.4538L6.75219 2.7759C6.27278 2.3764 5.63358 2.1367 4.91448 2.1367Z'
              fill='white'
            />
          </svg>
        </button>
        <div>
          <ShoppingBag
            isOpen={isShoppingBagOpen}
            setIsOpen={setIsShoppingBagOpen}
          />
        </div>
      </div>
      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
      {isShoppingBagOpen && (
        <div className='fixed inset-0 z-20 bg-black bg-opacity-50'></div>
      )}
    </nav>
  );
};

export default Navbar;
