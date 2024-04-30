import Image from 'next/image';
import item from '@/assets/images/Balenciaga Glasses.png';

const ShoppingBagItem = () => {
  return (
    <div className='inline-flex w-[90%] py-4 m-2 mx-5 border-b border-gray-300'>
      <div name='item image' className='w-32 h-32 bg-custom-gray-2'>
        <Image src={item} alt='' />
      </div>
      <div
        className='flex flex-col justify-between flex-1 pl-2 '
        name='item info'
      >
        <div>
          <div>
            <h3 className='text-sm '>BB0003S</h3>
          </div>
          <div className='inline-flex justify-between w-full text-sm'>
            <h3>BB0003S 001 Black/Gray</h3>
            <span className='text-sm font-semibold'>$1,074</span>
          </div>
        </div>

        <div className='inline-flex items-center justify-between'>
          <div className='inline-flex w-10 grid-rows-3 '>
            <button className='px-3 py-1 border border-gray-500'>-</button>
            <span className='px-3 py-1 border-gray-500 border-y'>4</span>
            <button className='px-3 py-1 border border-gray-500'>+</button>
          </div>
          <button className='text-gray-600 border-b border-gray-500'>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBagItem;
