import { combineReducers } from 'redux';
import categories from '../components/CategoryButtonList/reducer';
import posts from '../components/PostItems/reducer';
import comments from '../components/SinglePostPageWrapper/reducer';

const rootReducer = combineReducers({
  categoryButtons: categories,
  allPosts: posts,
  postComments: comments
});

export default rootReducer;
