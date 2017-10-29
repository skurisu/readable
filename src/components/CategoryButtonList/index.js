import { connect } from 'react-redux';
import { setCategories, selectCategory } from './actions';
import CategoryButtonList from './component';

function mapDispatchToProps(dispatch) {
  return {
    setCategories: data => {
      dispatch(setCategories(data));
    },
    selectCategory: data => {
      dispatch(selectCategory(data));
    }
  };
}

function mapStateToProps(state) {
  return {
    categories: state.categoryButtons.categories,
    selectedCategory: state.categoryButtons.selectedCategory
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryButtonList);

// <CategoryButtonList /> // connected to redux
