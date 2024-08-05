import React from 'react';
import {
  useGetCart,
  useCreateLineItem,
  useUpdateLineItem,
  useUpdateCart,
  useAddShippingMethodToCart,
} from 'medusa-react';
import { debounce } from 'lodash';
import { useShoppingBagContext } from '@/contexts/ShoppingBagContext';
import { useRouter } from 'next/navigation';

const CartDBUpdater = ({
  cartId,
  tailwindCl,
  buttonName,
  routeToGo = null,
  additionalCartInfo = null,
  shippingMethod = null,
}) => {
  const router = useRouter();

  const { cart } = useGetCart(cartId);
  const updateCart = useUpdateCart(cartId);

  const createLineItem = useCreateLineItem(cartId);
  const updateLineItem = useUpdateLineItem(cartId);
  const addShippingMethod = useAddShippingMethodToCart(cartId);

  const { shoppingBagItems, setIsShoppingBagOpened } = useShoppingBagContext();

  // simple debounce api calls and send by categories
  const handleUpdateCartItems = debounce(() => {
    const itemsToUpdate = [];
    const itemsToAdd = [];
    const itemsToRemove = [];

    // FIRST, UPDATE or ADD items from shoppingBagItems to the cart
    shoppingBagItems.forEach((shoppingBagItem) => {
      const cartItem = cart?.items.find(
        (cartItem) => cartItem.variant_id === shoppingBagItem.variants[0]?.id
      );

      if (cartItem) {
        if (cartItem.quantity !== shoppingBagItem.quantity) {
          itemsToUpdate.push({
            lineId: cartItem.id,
            quantity: shoppingBagItem.quantity,
          });
        }
      } else {
        itemsToAdd.push({
          variant_id: shoppingBagItem.variants[0].id,
          quantity: shoppingBagItem.quantity,
        });
      }
    });

    // Handle REMOVE items in the cart that are not in the shoppingBagItems context
    cart?.items.forEach((cartItem) => {
      const contextItem = shoppingBagItems.find(
        (shoppingBagItem) =>
          shoppingBagItem.variants[0]?.id === cartItem.variant_id
      );

      if (!contextItem) {
        itemsToRemove.push({
          lineId: cartItem.id,
          quantity: 0,
        });
      }
    });
    try {
      // Perform updates
      itemsToUpdate.forEach((item) => {
        updateLineItem.mutate(item, {
          onSuccess: ({ cart }) => {
            console.log(
              `Updated item ${item.lineId} with new quantity ${item.quantity}`
            );
            console.log('items to update from api', itemsToUpdate);
          },
          onError: (error) => {
            console.error('Error updating item quantity:', error);
          },
        });
      });

      // Perform adds
      itemsToAdd.forEach((item) => {
        createLineItem.mutate(item, {
          onSuccess: ({ cart }) => {
            console.log(
              `Added new item ${item.variant_id} with quantity ${item.quantity}`
            );
            console.log('items to add from api', itemsToAdd);
          },
          onError: (error) => {
            console.error('Error adding new item to cart:', error);
          },
        });
      });

      // Perform removals
      itemsToRemove.forEach((item) => {
        updateLineItem.mutate(item, {
          onSuccess: ({ cart }) => {
            console.log(
              `Set quantity to 0 for item ${item.lineId} as it is not in the shopping bag context`
            );
          },
          onError: (error) => {
            console.error('Error setting item quantity to 0:', error);
          },
        });
      });

      if (additionalCartInfo) {
        updateCart.mutate(additionalCartInfo);
      }

      if (shippingMethod) {
        addShippingMethod.mutate(shippingMethod);
      }
    } catch (error) {
      console.log('Error', error);
    } finally {
      if (routeToGo) {
        router.push(routeToGo);
      }
      setIsShoppingBagOpened(false);
    }
  }, 500); // Debounce delay in milliseconds

  return (
    <div>
      <button onClick={handleUpdateCartItems} className={tailwindCl}>
        {buttonName}
      </button>
    </div>
  );
};

export default CartDBUpdater;
