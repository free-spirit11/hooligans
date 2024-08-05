export const addToBag = (shoppingBagItems, productToAdd) => {
  const itemIsInBag = shoppingBagItems.find(
    (bagItem) => bagItem.id === productToAdd.id
  );

  if (itemIsInBag) {
    return shoppingBagItems.map((bagItem) =>
      bagItem.id === productToAdd.id
        ? { ...bagItem, quantity: bagItem.quantity + 1 }
        : bagItem
    );
  }

  return [...shoppingBagItems, { ...productToAdd, quantity: 1 }];
};

export const removeFromBag = (shoppingBagItems, productToRemove) => {
  const itemIsInBag = shoppingBagItems.find(
    (bagItem) => bagItem.id === productToRemove.id
  );

  if (!itemIsInBag) {
    throw new Error('Item is not in bag');
  }

  const updatedBagItems = shoppingBagItems.map((bagItem) =>
    bagItem.id === productToRemove.id
      ? { ...bagItem, quantity: bagItem.quantity - 1 }
      : bagItem
  );

  return updatedBagItems.filter((bagItem) => bagItem.quantity > 0);
};

export const deleteFromBag = (shoppingBagItems, productToDelete) => {
  const itemIsInBag = shoppingBagItems.find(
    (bagItem) => bagItem.id === productToDelete.id
  );
  if (!itemIsInBag) {
    throw new Error('Item is not in bag');
  }
  return shoppingBagItems.filter(
    (bagItem) => bagItem.id !== productToDelete.id
  );
};
