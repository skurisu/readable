import { SET_ALLPOSTS, SET_SELECTEDPOSTS, SET_POST } from './actions';

const initialState = { posts: [], selectedPosts: [], singlePost: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALLPOSTS:
      return {
        ...state,
        posts: action.data
      };
    case SET_SELECTEDPOSTS:
      return {
        ...state,
        selectedPosts: action.data
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
