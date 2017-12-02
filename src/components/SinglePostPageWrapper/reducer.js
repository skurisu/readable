import { SET_COMMENTS, SET_POST, SET_COMMENTLENGTH } from './actions';

const initialState = { comments: [], singlePost: false, commentLength: null };

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
    case SET_COMMENTLENGTH:
      return {
        ...state,
        commentLength: action.data
      };
    default:
      return state;
  }
}
