import Link from 'next/link';

const Advertisement = () => {
  return (
    <div className='grid grid-cols-40/60'>
      <div
        className='relative bg-top bg-cover h-850px'
        style={{ backgroundImage: `url('/arrivals-background.png')` }}
      ></div>
      <div className='relative text-white bg-custom-blue'>
        <div className='absolute flex flex-col top-36 left-24'>
          <h1 className='p-1 m-1 text-5xl'>UPGRADE</h1>
          <h1 className='p-1 m-1 text-5xl'>YOUR STYLE</h1>
          <p className='p-1 m-1'>
            New season, new style. Find the perfect shades.
          </p>
          <Link href='/'>
            <button className='py-4 m-1 my-3 text-sm border px-9 hover:bg-blue-900 hover:bg-opacity-50'>
              Discover women's new arrivals
            </button>
          </Link>
          <Link href=''>
            <button className='py-4 m-1 my-3 text-sm border px-9 hover:bg-blue-900 hover:bg-opacity-50'>
              Discover men's new arrivals
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
