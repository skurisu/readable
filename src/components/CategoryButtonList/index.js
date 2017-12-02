import { connect } from 'react-redux';
import { setCategories, getCategories } from './actions';

import CategoryButtonList from './component';

function mapDispatchToProps(dispatch) {
  return {
    setCategories: data => {
      dispatch(setCategories(data));
    },
    getCategories: () => {
      dispatch(getCategories());
    }
  };
}

function mapStateToProps(state) {
  return {
    categories: state.categoryButtons.categories
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryButtonList);
