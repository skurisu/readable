import { connect } from 'react-redux';
import AddPostForm from './component';

function mapStateToProps(state) {
  return {
    categories: state.categoryButtons.categories
  };
}

export default connect(mapStateToProps)(AddPostForm);
