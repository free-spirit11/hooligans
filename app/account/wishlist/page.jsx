'use client';
import Navbar from '@/components/Navbar';
import { useShoppingBagContext } from '@/contexts/ShoppingBagContext';
import Image from 'next/image';

const WishlistPage = () => {
  const { wishlistItems, addItemToBag, removeWishlistItem } =
    useShoppingBagContext();

  return (
    <>
      <Navbar color='black' mainPage={false} />
      <section className='flex flex-col min-h-screen pt-24 bg-gray-100'>
        <div className='container flex-1 mx-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='border-b'>
                <th className='w-2/3 px-6 pt-2 pb-4 text-lg font-semibold'>
                  Product
                </th>
                <th className='w-1/6 px-6 pt-2 pb-4 text-lg font-semibold'>
                  Price
                </th>
                <th className='w-1/6 px-6 pt-2 pb-4 text-lg font-semibold'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody className='overflow-auto'>
              {wishlistItems.length > 0 ? (
                wishlistItems.map((wishlistItem, index) => (
                  <tr key={index} className='border-b'>
                    <td className='px-6 py-4'>
                      <div className='flex items-center space-x-4'>
                        <div className='flex-shrink-0 w-32 h-32'>
                          <Image
                            src={wishlistItem.images[0]}
                            alt='Shopping bag item image'
                            width={128}
                            height={128}
                            layout='responsive'
                          />
                        </div>
                        <div>
                          <h3 className='text-sm'>
                            {wishlistItem.brand} {wishlistItem.model}{' '}
                            {wishlistItem.color}
                          </h3>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <span className='font-semibold'>
                        ${wishlistItem.price}
                      </span>
                    </td>
                    <td className='px-6 py-4'>
                      <button
                        className='w-full py-3 mb-2 text-xs text-white bg-button-blue hover:bg-button-blue-hover'
                        onClick={() => addItemToBag(wishlistItem)}
                      >
                        ADD TO CART
                      </button>
                      <button
                        className='w-full py-3 text-xs text-white bg-red-600 border hover:bg-red-700'
                        onClick={() => removeWishlistItem(wishlistItem)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='3' className='py-4 text-center'>
                    No items in the wishlist.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default WishlistPage;
