import Link from 'next/link';
import ProductCard from './ProductCard';

const Exhibition = ({ heading }) => {
  return (
    <section>
      <div>
        <div className='inline-flex justify-between w-full p-10'>
          <h1 className='flex items-center text-2xl'>{heading}</h1>
          <Link href='/'>
            <button className='px-5 py-3 border border-gray-900 hover:bg-gray-500 hover:bg-opacity-10'>
              <span>Shop all</span>
            </button>
          </Link>
        </div>
        <div className='inline-flex p-4 space-x-4 overflow-x-auto hide-scrollbar'>
          <ProductCard id='1' />
          <ProductCard id='1' />
          <ProductCard id='1' />
          <ProductCard id='1' />
          <ProductCard id='1' />
          <ProductCard id='1' />
        </div>
      </div>
    </section>
  );
};

export default Exhibition;
