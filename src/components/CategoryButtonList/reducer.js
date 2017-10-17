import { SET_CATEGORIES } from './actions';

const initialState = { categories: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.data
      };
    default:
      return state;
  }
}
