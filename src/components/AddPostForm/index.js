import { connect } from 'react-redux';
import AddPostForm from './component';
import { createPost } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    createPost: data => {
      dispatch(createPost(data));
    }
  };
}

function mapStateToProps(state) {
  return {
    categories: state.categoryButtons.categories
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);
