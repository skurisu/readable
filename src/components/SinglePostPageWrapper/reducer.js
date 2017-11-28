import { SET_COMMENTS } from './actions';
import { SET_POST } from './actions';

const initialState = { comments: [], singlePost: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.data
      };
    case SET_POST:
      return {
        ...state,
        singlePost: action.data
      };
    default:
      return state;
  }
}
