import hamburgerClose from '@/assets/images/hamburger-close.svg';
import Image from 'next/image';

const Menu = ({ setIsMenuOpen }) => {
  return (
    <div className='fixed inset-0 z-10 flex justify-start flex-col bg-black bg-opacity-60'>
      <button
        className='flex self-start inline-flex items-center mb-4 text-lg text-white mt-7 ml-11 rounded-md p-1 hover:bg-black hover:bg-opacity-10'
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <Image src={hamburgerClose} />
        <span className='px-3'>Close</span>
      </button>
      <div className='self-start bg-white p-10 pr-20 shadow-lg ml-12'>
        <div className='flex flex-col justify-start'>
          <a
            href='/sunglasses'
            className='mb-2 pb-1 pr-40 text-xl font-light hover:text-gray-500 transition-colors border-b border-gray-900'
          >
            SUNGLASSES
          </a>
          <a
            href='/eyeglasses'
            className='mb-2 pb-1 pt-3 text-xl font-light hover:text-gray-500 transition-colors border-b border-gray-900'
          >
            EYEGLASSES
          </a>
          <a
            href='/brands'
            className='mb-2 pb-1 pt-3 text-xl font-light hover:text-gray-500 transition-colors border-b border-gray-900'
          >
            BRANDS
          </a>
          <a
            href='/sale'
            className='mb-2 pb-1 pt-3 text-xl font-light hover:text-gray-500 transition-colors border-b border-gray-900'
          >
            SALE
          </a>
          <a
            href='/women'
            className='mb-2 pb-1 pt-3 text-xl font-light hover:text-gray-500 transition-colors border-b border-gray-900'
          >
            Woman
          </a>
          <a
            href='/men'
            className='mb-2 pb-1 pt-3 text-xl font-light hover:text-gray-500 transition-colors border-b border-gray-900'
          >
            Man
          </a>
          <a
            href='/login'
            className='mt-4 py-40 pb-1 hover:text-gray-500 transition-colors'
          >
            Login
          </a>
          <div className='mt-4'>
            <select className='p-2 border rounded'>
              <option>Poland (PLN)</option>
              {/* Add other currencies as needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
