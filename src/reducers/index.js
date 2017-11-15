import { combineReducers } from 'redux';
import categories from '../components/CategoryButtonList/reducer';
import posts from '../components/PostItems/reducer';
import comments from '../components/SinglePostPageWrapper/reducer';
import sortBy from '../components/SortOptions/reducer';

const rootReducer = combineReducers({
  categoryButtons: categories,
  allPosts: posts,
  postComments: comments,
  sortBy: sortBy
});

export default rootReducer;
