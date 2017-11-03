import { connect } from 'react-redux';
import AddPostForm from './component';

// function mapDispatchToProps(dispatch) {
//   return {
//   };
// }

function mapStateToProps(state) {
  return {
    categories: state.categoryButtons.categories
  };
}

export default connect(mapStateToProps)(AddPostForm);
