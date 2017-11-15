import { connect } from 'react-redux';
import { sortBy } from './actions';
import SortOptions from './component';

function mapDispatchToProps(dispatch) {
  return {
    sortBy: data => {
      dispatch(sortBy(data));
    }
  };
}

function mapStateToProps(state) {
  return {
    sortType: state.sortBy.name
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortOptions);
