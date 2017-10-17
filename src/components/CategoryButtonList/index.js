import { connect } from 'react-redux';
import { setCategories } from './actions';
import CategoryButtonList from './component';

function mapDispatchToProps(dispatch) {
  return {
    setCategories: data => {
      dispatch(setCategories(data));
    }
  };
}

function mapStateToProps(state) {
  return { categories: state.categoryButtons.categories };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryButtonList);

// <CategoryButtonList /> // connected to redux
