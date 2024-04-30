import Navbar from './Navbar';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='relative h-screen overflow-hidden'>
      <div className='absolute inset-0 bg-gray-950 bg-opacity-20'></div>
      <Navbar color='white' mainPage={true} />
      <div className='absolute inset-0 flex flex-col justify-center text-white'>
        <h1 className='flex justify-around p-3 m-3 mt-40 text-8xl'>
          Be your own rebel
        </h1>
        <p className='flex justify-around'>
          Get summer ready with Hooligans. Find your perfect pair of subglasses.
        </p>
        <Link href='/store/category/57' className='flex justify-around'>
          <button className='py-4 mt-6 text-xs border px-7 hover:bg-gray-500 hover:bg-opacity-20'>
            Shop now and get your shades on
          </button>
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-0 md:grid-cols-2'>
        <div
          className='h-screen bg-top bg-cover'
          style={{ backgroundImage: `url('/left-background.png')` }}
        ></div>
        <div
          className='h-screen bg-top bg-cover'
          style={{ backgroundImage: `url('/right-background.png')` }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
