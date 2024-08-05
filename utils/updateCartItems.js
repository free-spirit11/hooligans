// fetching api in parrallel using promises
const debouncedUpdateCartItemsC = debounce(async () => {
  const itemsToUpdate = [];
  const itemsToAdd = [];
  const itemsToRemove = [];

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
    // Perform all updates and additions in parallel
    await Promise.all([
      ...itemsToUpdate.map((item) => updateLineItem.mutateAsync(item)),
      ...itemsToAdd.map((item) => createLineItem.mutateAsync(item)),
      ...itemsToRemove.map((item) => updateLineItem.mutateAsync(item)),
    ]);

    // Fetch the updated cart to ensure state consistency
    const updatedCart = await fetchUpdatedCart(cartId);
    setCart(updatedCart);
  } catch (error) {
    console.error('Error updating cart items:', error);
  }
}, 500); // Debounce delay in milliseconds
// part of fetching api in parrallel using promises
// Fetch updated cart function
const fetchUpdatedCart = async (cartId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/carts/${cartId}`,
    {
      credentials: 'include',
    }
  );
  const { cart } = await response.json();
  return cart;
};

//

// async await api calls chaining
const debouncedUpdateCartItemsB = debounce(async () => {
  const itemsToUpdate = [];
  const itemsToAdd = [];
  const itemsToRemove = [];

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

  // Chain API calls for updates
  for (const item of itemsToUpdate) {
    try {
      const response = await updateLineItem.mutateAsync(item);
      setCart(response.cart);
      console.log(
        `Updated item ${item.lineId} with new quantity ${item.quantity}`
      );
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  }

  // Chain API calls for adds
  for (const item of itemsToAdd) {
    try {
      const response = await createLineItem.mutateAsync(item);
      setCart(response.cart);
      console.log(
        `Added new item ${item.variant_id} with quantity ${item.quantity}`
      );
    } catch (error) {
      console.error('Error adding new item to cart:', error);
    }
  }

  // Chain API calls for removals
  for (const item of itemsToRemove) {
    try {
      const response = await updateLineItem.mutateAsync(item);
      setCart(response.cart);
      console.log(`Set quantity to 0 for item ${item.lineId}`);
    } catch (error) {
      console.error('Error setting item quantity to 0:', error);
    }
  }
}, 500);

//

// simple debounce api calls and send by categories
const debouncedUpdateCartItemsA = debounce(() => {
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
        console.log('items to update from pusher', itemsToUpdate);
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
    console.log('items to remove from pusher', itemsToRemove);
  });

  // Perform updates
  itemsToUpdate.forEach((item) => {
    updateLineItem.mutate(item, {
      onSuccess: ({ cart }) => {
        setCart(cart);
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
        setCart(cart);
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
        setCart(cart);
        console.log(
          `Set quantity to 0 for item ${item.lineId} as it is not in the shopping bag context`
        );
      },
      onError: (error) => {
        console.error('Error setting item quantity to 0:', error);
      },
    });
  });
}, 500); // Debounce delay in milliseconds
