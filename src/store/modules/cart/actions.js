export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(id, amount) {
  console.log('updateAmount -> amount', amount);
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
