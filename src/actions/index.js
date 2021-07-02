export const increment = (payload) => {
  return {
    type: 'INCREMENT',
    payload,
  };
};

export const decrement = (payload) => {
  return {
    type: 'DECREMENT',
    payload,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};
