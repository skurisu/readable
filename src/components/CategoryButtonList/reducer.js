import { SET_CATEGORIES, SELECT_CATEGORY } from './actions';

const initialState = { categories: [], selectedCategory: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.data
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.data
      };
    default:
      return state;
  }
}
