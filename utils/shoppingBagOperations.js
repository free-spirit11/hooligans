export const addToBag = (shoppingBagItems, productToAdd) => {
  const itemIsInBag = shoppingBagItems.find(
    (bagItem) => bagItem._id === productToAdd._id
  );

  if (itemIsInBag) {
    return shoppingBagItems.map((bagItem) =>
      bagItem._id === productToAdd._id
        ? { ...bagItem, quantity: bagItem.quantity + 1 }
        : bagItem
    );
  }

  return [...shoppingBagItems, { ...productToAdd, quantity: 1 }];
};

export const removeFromBag = (shoppingBagItems, productToRemove) => {
  const itemIsInBag = shoppingBagItems.find(
    (bagItem) => bagItem._id === productToRemove._id
  );

  if (!itemIsInBag) {
    throw new Error('Item is not in bag');
  }

  const updatedBagItems = shoppingBagItems.map((bagItem) =>
    bagItem._id === productToRemove._id
      ? { ...bagItem, quantity: bagItem.quantity - 1 }
      : bagItem
  );

  return updatedBagItems.filter((bagItem) => bagItem.quantity > 0);
};

export const deleteFromBag = (shoppingBagItems, productToDelete) => {
  const itemIsInBag = shoppingBagItems.find(
    (bagItem) => bagItem._id === productToDelete._id
  );
  if (!itemIsInBag) {
    throw new Error('Item is not in bag');
  }
  return shoppingBagItems.filter(
    (bagItem) => bagItem._id !== productToDelete._id
  );
};
