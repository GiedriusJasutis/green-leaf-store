import { treesData } from './../db/data';

export const treesReducer = (state = treesData, action) => {
  switch (action.type) {
    case 'GET_TREES_DATA':
      return state;
    default:
      return state;
  }
};
