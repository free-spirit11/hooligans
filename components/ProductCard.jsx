'use client';
import Image from 'next/image';
import wishlistIcon from '@/assets/images/black-wishlist.svg';
import Link from 'next/link';
import { useShoppingBagContext } from '@/contexts/ShoppingBagContext';

const ProductCard = ({ product }) => {
  const { addWishlistItem } = useShoppingBagContext();
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
          <Image
            className='w-8 duration-300 hover:w-10'
            src={wishlistIcon}
            alt='wishlist'
            onClick={() => addWishlistItem(product)}
          />
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
