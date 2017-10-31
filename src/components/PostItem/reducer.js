import { SET_POST } from './actions';

const initialState = { singlePost: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        singlePost: action.data
      };
    default:
      return state;
  }
}
