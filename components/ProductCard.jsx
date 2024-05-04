'use client';
import Image from 'next/image';
import wishlistIcon from '@/assets/images/black-wishlist.svg';
import Link from 'next/link';
import { useShoppingBagContext } from '@/contexts/ShoppingBagContext';

const ProductCard = ({ product }) => {
  const { addWishlistItem, wishlistItems, removeWishlistItem } =
    useShoppingBagContext();
  const firstPngImage = product.images.find((image) => image.endsWith('.png'));

  return (
    <div className='min-w-[25%] p-2 px-4'>
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
            className='duration-300 hover:scale-125'
            onClick={
              wishlistItems.some(
                (wishlistItem) => wishlistItem._id === product._id
              )
                ? () => removeWishlistItem(product)
                : () => addWishlistItem(product)
            }
          >
            <path
              d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
              stroke='black'
              stroke-width='2'
              fill={
                wishlistItems.some(
                  (wishlistItem) => wishlistItem._id === product._id
                )
                  ? 'red'
                  : 'none'
              }
            />
          </svg>

          {/* <svg
            className='hover:scale-125'
            width='30'
            height='30'
            viewBox='0 0 17 15'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => addWishlistItem(product)}
          >
            <path
              id='Vector'
              d='M8.43009 14.681L1.63858 7.88951C0.120474 6.2116 0.120474 3.6548 1.63858 2.0568C2.43758 1.1779 3.47628 0.618595 4.67478 0.538695C5.87328 0.458795 6.99188 0.858296 7.87079 1.5774L8.43009 2.1367L8.98939 1.5774C10.6673 -0.100506 13.3839 -0.100506 15.1417 1.5774C16.0206 2.3764 16.5 3.495 16.5 4.6935C16.5 5.892 16.1005 7.0106 15.3015 7.88951L8.43009 14.681ZM4.91448 2.1367C4.83458 2.1367 4.75468 2.1367 4.75468 2.1367C3.95568 2.1367 3.31648 2.5362 2.83708 3.0955C1.87828 4.1342 1.87828 5.7322 2.83708 6.77091L8.43009 12.3639L14.103 6.77091C14.5824 6.2116 14.902 5.4925 14.902 4.7734C14.902 4.0543 14.5025 3.2553 13.9432 2.7759C12.9045 1.7372 11.2266 1.7372 10.1879 2.696L8.43009 4.4538L6.75219 2.7759C6.27278 2.3764 5.63358 2.1367 4.91448 2.1367Z'
            />
          </svg> */}
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
