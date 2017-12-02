import { connect } from 'react-redux';
import SingleComment from './component';
import { updateComment } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    updateComment: (updatedComment, id, forceUpdate, toggleEditForm) => {
      dispatch(updateComment(updatedComment, id, forceUpdate, toggleEditForm));
    }
  };
}

export default connect(null, mapDispatchToProps)(SingleComment);
