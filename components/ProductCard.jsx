import Image from 'next/image';
import wishlistIcon from '@/assets/images/black-wishlist.svg';
import testGlasses from '@/assets/images/Balenciaga Glasses.png';
import Link from 'next/link';

const ProductCard = ({ id }) => {
  return (
    <div className='min-w-[25%] p-2 px-4'>
      <div className='relative transition-transform duration-500 shadow-lg hover:opacity-90 hover:scale-110 '>
        <Link href={`/store/product/${id}`}>
          <Image
            className='w-full bg-custom-gray'
            src={testGlasses}
            alt='Glasses product image'
          />
        </Link>
        <button className='absolute top-2 right-2'>
          <Image className='w-8 hover:w-10' src={wishlistIcon} alt='wishlist' />
        </button>
      </div>
      <div>
        <Link href='/'>
          <h3 className='p-1 m-1'>Product SKU</h3>
          <h2 className='p-1 m-1'>Product name and model and color</h2>
        </Link>
        <div className='p-1 m-1'>
          <span className='pr-2'>Product price</span>
          <span className='text-red-500'>Sale ...%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
