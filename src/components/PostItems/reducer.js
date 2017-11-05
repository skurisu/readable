import { SET_ALLPOSTS, SET_SELECTEDPOSTS, SET_REFRESHPOSTS } from './actions';
import { SET_POST } from '../PostItem/actions';

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
    case SET_REFRESHPOSTS:
      return {
        ...state,
        refreshedPosts: action.data
      };
    default:
      return state;
  }
}
