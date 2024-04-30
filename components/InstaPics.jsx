import Link from 'next/link';
import image1 from '@/assets/images/exhibition/1.png';
import image2 from '@/assets/images/exhibition/4.png';
import image3 from '@/assets/images/exhibition/5.png';
import image4 from '@/assets/images/exhibition/8.png';
import image5 from '@/assets/images/exhibition/9.png';
import image6 from '@/assets/images/exhibition/10.png';
import image7 from '@/assets/images/exhibition/13.png';
import image8 from '@/assets/images/exhibition/14.png';
import Image from 'next/image';

const InstaPics = () => {
  return (
    <div className='h-auto '>
      <div className='inline-flex justify-between w-full p-10 '>
        <h1 className='flex items-center text-2xl'>HOOLIGANS</h1>
        <Link href='/'>
          <button className='px-5 py-3 border border-gray-900 hover:bg-gray-500 hover:bg-opacity-10'>
            <span>See more</span>
          </button>
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-4 p-5 overflow-hidden lg:grid-cols-4'>
        <div className=''>
          <div className='flex items-end pb-4'>
            <Image
              src={image1}
              alt=''
              className='transition-transform duration-500 hover:scale-110 hover:cursor-pointer'
            />
          </div>
          <div className='flex items-start'>
            <Image
              src={image2}
              alt=''
              className='transition-transform duration-500 hover:scale-110 hover:cursor-pointer'
            />
          </div>
        </div>
        <div className=''>
          <div className='flex items-end pb-4'>
            <Image
              src={image3}
              alt=''
              className='transition-transform duration-500 hover:scale-110 hover:cursor-pointer'
            />
          </div>
          <div className='flex items-start'>
            <Image
              src={image4}
              alt=''
              className='transition-transform duration-500 hover:scale-110 hover:cursor-pointer'
            />
          </div>
        </div>
        <div className=''>
          <div className='flex items-end pb-4'>
            <Image
              src={image5}
              alt=''
              className='transition-transform duration-500 hover:scale-110 hover:cursor-pointer'
            />
          </div>
          <div className='flex items-start'>
            <Image
              src={image6}
              alt=''
              className='transition-transform duration-500 hover:scale-110 hover:cursor-pointer'
            />
          </div>
        </div>
        <div className=''>
          <div className='flex items-end pb-4'>
            <Image
              src={image7}
              alt=''
              className='transition-transform duration-500 hover:scale-110 hover:cursor-pointer'
            />
          </div>
          <div className='flex items-start'>
            <Image
              src={image8}
              alt=''
              className='transition-transform duration-500 hover:scale-110 hover:cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaPics;
