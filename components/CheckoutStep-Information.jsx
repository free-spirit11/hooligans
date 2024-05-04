import Link from 'next/link';

export default function Information({ onNext }) {
  return (
    <div className='pb-5'>
      <div className='my-3'>
        <label>
          <span className='text-gray-500'>Email</span>
        </label>
        <input
          type='email'
          className='w-full py-2 border-b border-black focus:outline-none'
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>First Name</span>
        </label>
        <input
          type='text'
          className='w-full py-2 border-b border-black focus:outline-none'
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>Last Name</span>
        </label>
        <input
          type='text'
          className='w-full py-2 border-b border-black focus:outline-none'
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>Address</span>
        </label>
        <input
          type='text'
          className='w-full py-2 border-b border-black focus:outline-none'
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>City</span>
        </label>
        <input
          type='text'
          className='w-full py-2 border-b border-black focus:outline-none'
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>Post Code</span>
        </label>
        <input
          type='text'
          className='w-full py-2 border-b border-black focus:outline-none'
        />
      </div>

      <div className='my-3'>
        <label className='text-gray-500'>Country</label>
        <select
          className='appearance-none w-full px-2 py-1.5 text-gray-700 bg-white bg-clip-padding bg-no-repeat border-b border-black focus:outline-none'
          aria-label='Default select example'
        >
          <option>United States</option>
          <option>Other Countries...</option>
        </select>
      </div>

      <div className='my-3'>
        <label className='text-gray-500'>State</label>
        <select
          className='appearance-none w-full px-2 py-1.5 text-gray-700 bg-white bg-clip-padding bg-no-repeat border-b border-black focus:outline-none'
          aria-label='Default select example'
        >
          <option>New York</option>
          <option>New Jersey</option>
          <option>Other ...</option>
        </select>
      </div>

      <div className='flex flex-col'>
        <label>
          <input type='checkbox' className='cursor-pointer' />
          <span className='ml-2'>Save this information for next time</span>
        </label>
        <label>
          <input type='checkbox' className='cursor-pointer' />
          <span className='ml-2'>
            My delivery and billing addresses are the same.
          </span>
        </label>
        <label>
          <input type='checkbox' className='cursor-pointer' />
          <span className='ml-2'>
            I have read and agree to the Terms & Conditions
          </span>
        </label>
      </div>

      <div className='flex justify-between'>
        <Link href='/'>
          <button className='mt-4 text-blue-700'>Return to the Homepage</button>
        </Link>
        <button
          className='px-6 py-3 mt-4 text-xs text-gray-300 bg-black'
          onClick={onNext}
        >
          Continue to Shipping
        </button>
      </div>
    </div>
  );
}
