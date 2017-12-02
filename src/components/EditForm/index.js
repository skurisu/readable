import { connect } from 'react-redux';
import EditForm from './component';
import { updatePost } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    updatePost: (post, id, setRefreshPosts, toggleEditForm) => {
      dispatch(updatePost(post, id, setRefreshPosts, toggleEditForm));
    }
  };
}

export default connect(null, mapDispatchToProps)(EditForm);
