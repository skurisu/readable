import { GET_ALLPOSTS } from './actions';

const initialState = { posts: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALLPOSTS:
      return {
        ...state,
        posts: action.data
      };
    default:
      return state;
  }
}
