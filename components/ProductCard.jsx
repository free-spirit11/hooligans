'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useShoppingBagContext } from '@/contexts/ShoppingBagContext';

const ProductCard = ({ product }) => {
  const { addWishlistItem, wishlistItems, removeWishlistItem } =
    useShoppingBagContext();
  const [animate, setAnimate] = useState(false);

  const firstPngImage = product.images.find((image) => image.endsWith('.png'));

  const handleWishlistClick = (product) => {
    const isWishlist = wishlistItems.some((item) => item._id === product._id);
    if (isWishlist) {
      removeWishlistItem(product);
    } else {
      addWishlistItem(product);
      setAnimate(true);
      // setTimeout(() => setAnimate(false), 500); // Reset animation state after 1 second
    }
  };

  return (
    <div className='min-w-[24%] mx-[11px] px-2 py-10'>
      <div className='relative transition-transform duration-500 shadow-lg hover:opacity-90 hover:scale-110 '>
        <Link href={`/store/product/${product._id}`}>
          <Image
            className='w-full h-auto bg-custom-gray'
            src={firstPngImage}
            alt='Glasses product image'
            width={0}
            height={0}
            sizes='100vw'
          />
        </Link>
        <button className='absolute top-2 right-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            viewBox='0 0 24 24'
            version='1.1'
            className={`hover:opacity-80 ${animate ? 'animate-pulse' : ''}`}
            onClick={() => handleWishlistClick(product)}
          >
            <path
              d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
              stroke='black'
              strokeWidth='2'
              fill={
                wishlistItems.some(
                  (wishlistItem) => wishlistItem._id === product._id
                )
                  ? 'black'
                  : 'none'
              }
            />
          </svg>
        </button>
      </div>
      <div className='font-serif '>
        <Link href={`/store/product/${product._id}`}>
          <h3 className='p-1 mt-3'>{product.model}</h3>
          <h2 className='p-1'>
            {product.brand} {product.model} {product.color}
          </h2>
        </Link>
        <div className='p-1'>
          <span className='pr-2'>${product.price}</span>
          {product.sale && <span className='text-red-500'>On Sale</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
