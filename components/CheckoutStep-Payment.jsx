export default function Payment({ onBack }) {
  return (
    <div className='p-6'>
      <h2 className='mb-4 font-bold'>Payment Details</h2>
      <input
        type='text'
        placeholder='Card Number'
        className='w-full max-w-md mb-4 input input-bordered'
      />
      <input
        type='text'
        placeholder='Name on card'
        className='w-full max-w-md mb-4 input input-bordered'
      />
      <input
        type='text'
        placeholder='Expiration date (MM/YY)'
        className='w-full max-w-xs mb-4 input input-bordered'
      />
      <input
        type='text'
        placeholder='Security code'
        className='w-full max-w-xs mb-4 input input-bordered'
      />
      <div className='form-control'>
        <label className='cursor-pointer label'>
          <input type='checkbox' className='checkbox' checked />
          <span className='ml-2 label-text'>
            Use a different billing address
          </span>
        </label>
      </div>
      <div className='flex justify-between mt-4'>
        <button className='mt-4 text-blue-700' onClick={onBack}>
          Return to Shipping
        </button>
        <button className='px-6 py-3 mt-4 text-xs text-gray-300 bg-black'>
          Pay Now
        </button>
      </div>
    </div>
  );
}
