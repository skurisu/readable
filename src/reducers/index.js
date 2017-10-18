import { combineReducers } from 'redux';
import categories from '../components/CategoryButtonList/reducer';
import posts from '../components/PostItem/reducer';

const rootReducer = combineReducers({
  categoryButtons: categories,
  allPosts: posts
});

export default rootReducer;
