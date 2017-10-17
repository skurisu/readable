import { combineReducers } from 'redux';
import categories from '../components/CategoryButtonList/reducer';

const rootReducer = combineReducers({
  categoryButtons: categories
});

export default rootReducer;
