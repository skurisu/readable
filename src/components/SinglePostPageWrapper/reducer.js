import { SET_COMMENTS } from './actions';

const initialState = { comments: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.data
      };
    default:
      return state;
  }
}
