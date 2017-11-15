import { SORTBY } from './actions';

const initialState = { timeAsc: '' };

export default function(state = initialState, action) {
  switch (action.type) {
    case SORTBY:
      return {
        ...state,
        name: action.data
      };
    default:
      return state;
  }
}
