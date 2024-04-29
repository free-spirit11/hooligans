import hamburgerClose from '@/assets/images/hamburger-close.svg';
import Image from 'next/image';

const Menu = ({ setIsMenuOpen }) => {
  return (
    <div className='fixed inset-0 z-10 flex flex-col justify-start bg-black bg-opacity-60'>
      <button
        className='flex inline-flex items-center self-start p-1 pb-2 mb-5 text-lg text-white rounded-md mt-7 ml-11 '
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <Image src={hamburgerClose} />
        <span className='px-3'>Close</span>
      </button>
      <div className='self-start p-10 pr-20 ml-12 bg-white shadow-lg'>
        <div className='flex flex-col justify-start'>
          <a
            href='/sunglasses'
            className='pb-1 pr-40 mb-2 text-xl font-light transition-colors border-b border-gray-900 hover:text-gray-500'
          >
            SUNGLASSES
          </a>
          <a
            href='/eyeglasses'
            className='pt-3 pb-1 mb-2 text-xl font-light transition-colors border-b border-gray-900 hover:text-gray-500'
          >
            EYEGLASSES
          </a>
          <a
            href='/brands'
            className='pt-3 pb-1 mb-2 text-xl font-light transition-colors border-b border-gray-900 hover:text-gray-500'
          >
            BRANDS
          </a>
          <a
            href='/sale'
            className='pt-3 pb-1 mb-2 text-xl font-light transition-colors border-b border-gray-900 hover:text-gray-500'
          >
            SALE
          </a>
          <a
            href='/women'
            className='pt-3 pb-1 mb-2 text-xl font-light transition-colors border-b border-gray-900 hover:text-gray-500'
          >
            Woman
          </a>
          <a
            href='/men'
            className='pt-3 pb-1 mb-2 text-xl font-light transition-colors border-b border-gray-900 hover:text-gray-500'
          >
            Man
          </a>
          <a
            href='/login'
            className='py-40 pb-1 mt-4 transition-colors hover:text-gray-500'
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
