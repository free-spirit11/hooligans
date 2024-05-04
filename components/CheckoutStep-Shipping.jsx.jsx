export default function Shipping({ onNext, onBack }) {
  return (
    <div className='p-6'>
      <h2 className='mb-4 font-bold'>Shipping Method</h2>
      <div className='flex flex-col'>
        <label className='flex items-center justify-between p-4 border border-gray-300 cursor-pointer'>
          <input
            type='radio'
            id='paidShipping'
            name='shippingOption'
            className='flex items-start justify-start w-5 h-5 cursor-pointer'
            defaultChecked
          />
          <span>Free Shipping - UPS (3-5 working days)</span>
          <span>Free</span>
        </label>
        <label className='flex items-center justify-between p-4 border-b border-gray-300 cursor-pointer border-x'>
          <input
            type='radio'
            id='freeShipping'
            name='shippingOption'
            className='flex items-start justify-start w-5 h-5 cursor-pointer'
          />
          <span className='ml-2 label-text'>
            UPS Express 24-48h (working days) - €12
          </span>
          <span>$12</span>
        </label>
      </div>
      <div className='flex justify-between mt-4'>
        <button className='mt-4 text-blue-700' onClick={onBack}>
          Return to Information
        </button>
        <button
          className='px-6 py-3 mt-4 text-xs text-gray-300 bg-black'
          onClick={onNext}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}
