'use client';
import Image from 'next/image';
import { useShoppingBagContext } from '@/contexts/ShoppingBagContext';

const ShoppingBagItem = ({ shoppingBagItem }) => {
  const { addItemToBag, removeItemFromBag, deleteItem } =
    useShoppingBagContext();

  return (
    <div className='inline-flex w-[90%] py-4 m-2 mx-5 border-b border-gray-300'>
      <div name='item image' className='w-32 h-32 bg-custom-gray-2'>
        <Image
          src={shoppingBagItem.thumbnail}
          alt='Shopping bag item image'
          width={300}
          height={300}
        />
      </div>
      <div
        className='flex flex-col justify-between flex-1 pl-2 '
        name='item info'
      >
        <div>
          <div>
            <h3 className='text-sm '>{shoppingBagItem.model}</h3>
          </div>
          <div className='inline-flex justify-between w-full text-sm'>
            <h3>
              {shoppingBagItem.title} {/* {shoppingBagItem.color} */}
            </h3>
            <span className='text-sm font-semibold'>
              ${shoppingBagItem.variants[0]?.prices[0]?.amount / 100}
            </span>
          </div>
        </div>

        <div className='inline-flex items-center justify-between'>
          <div className='inline-flex w-10 grid-rows-3 '>
            <button
              className='px-3 py-1 border border-gray-500'
              onClick={() => removeItemFromBag(shoppingBagItem)}
            >
              -
            </button>

            <span className='px-3 py-1 border-gray-500 border-y'>
              {shoppingBagItem.quantity}
            </span>

            <button
              className={`px-3 py-1 border border-gray-500 ${
                shoppingBagItem.quantity >=
                  shoppingBagItem.variants[0].inventory_quantity &&
                'bg-gray-300 cursor-not-allowed'
              }`}
              onClick={() => {
                if (
                  shoppingBagItem.quantity <
                  shoppingBagItem.variants[0].inventory_quantity
                ) {
                  addItemToBag(shoppingBagItem);
                }
              }}
              disabled={
                shoppingBagItem.quantity >=
                shoppingBagItem.variants[0].inventory_quantity
              }
              title={
                shoppingBagItem.quantity >=
                shoppingBagItem.variants[0].inventory_quantity
                  ? 'You have selected all the items available in the inventory.'
                  : ''
              }
            >
              +
            </button>
          </div>
          <button
            className='text-gray-600 border-b border-gray-500'
            onClick={() => deleteItem(shoppingBagItem)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBagItem;
