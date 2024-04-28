import Link from 'next/link';
import ProductCard from './ProductCard';
// import arrivalsBackground from '@/assets/images/arrivals-background.png';
import Image from 'next/image';

const NewArrivals = () => {
  return (
    <section>
      <div>
        <div className='flex inline-flex justify-between w-full p-10 text-2xl arboreto'>
          <span className='flex items-center'>NEW ARRIVALS</span>
          <Link href='/'>
            <button className='border border-gray-900 p-2 hover:bg-gray-500 hover:bg-opacity-10'>
              SHOP ALL
            </button>
          </Link>
        </div>
        <div className='flex inline-flex overflow-x-auto p-4 space-x-4 hide-scrollbar'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className='grid grid-cols-40/60'>
        <div
          className='relative bg-top bg-cover h-850px'
          style={{ backgroundImage: `url('/arrivals-background.png')` }}
        ></div>
        <div className='relative bg-custom-blue text-white'>
          <div className='absolute flex flex-col top-36 left-24'>
            <h1 className='text-5xl p-1 m-1'>UPGRADE</h1>
            <h1 className='text-5xl p-1 m-1'>YOUR STYLE</h1>
            <p className='p-1 m-1'>
              New season, new style. Find the perfect shades.
            </p>
            <Link href='/'>
              <button className='text-sm border py-4 px-9 m-1 my-3 hover:bg-blue-900 hover:bg-opacity-50'>
                Discover women's new arrivals
              </button>
            </Link>
            <Link href=''>
              <button className='text-sm border py-4 px-9 m-1 my-3 hover:bg-blue-900 hover:bg-opacity-50'>
                Discover men's new arrivals
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
