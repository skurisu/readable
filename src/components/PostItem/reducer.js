import { SET_ALLPOSTS, SET_SELECTEDPOSTS } from './actions';

const initialState = { posts: [], selectedPosts: [] };

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
    default:
      return state;
  }
}
