const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      const item = action.payload.item;
      const id = item.id;
      const qty = action.payload.qty;

      // add first item to cart state
      if (state.length < 1) {
        const basketItem = {
          ...item,
          qty: qty,
        };
        const newState = [...state, basketItem];
        return newState;
      }

      // check if item is new, add to state array
      const findItem = state.some((cartItem) => cartItem.id === id);
      if (!findItem) {
        const basketItem = {
          ...item,
          qty: qty,
        };
        const newState = [...state, basketItem];
        return newState;
      }

      // check if item exist in array if yes add qty
      if (findItem) {
        const addQtyToBasket = state.map((cartItem) => {
          if (cartItem.id === id) {
            return {
              ...cartItem,
              qty: qty,
            };
          } else {
            return cartItem;
          }
        });

        return addQtyToBasket;
      }

      return state;
    }
    case 'DECREMENT': {
      const item = action.payload.item;
      const id = item.id;
      const qty = action.payload.qty;

      // 1. check if state not empty
      if (state.length < 1) {
        return state;
      }

      // 2. if state not empty check if item exist in state arr, if yes decrease qty by 1
      const findItem = state.some((cartItem) => cartItem.id === id);
      if (state.length > 0 && findItem) {
        const addQtyToBasket = state.map((cartItem) => {
          if (cartItem.id === id) {
            return {
              ...cartItem,
              qty: qty,
            };
          } else {
            return cartItem;
          }
        });

        return addQtyToBasket;
      }

      // 3. return state
      return state;
    }

    case 'CLEAR_CART': {
      const empty = [];
      return empty;
    }

    default:
      return state;
  }
};
