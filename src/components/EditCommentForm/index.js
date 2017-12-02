import { connect } from 'react-redux';
import SingleComment from './component';
import { updateComment } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    updateComment: (voteOption, id, forceUpdate, toggleForm) => {
      dispatch(updateComment(voteOption, id, forceUpdate, toggleForm));
    }
  };
}

export default connect(null, mapDispatchToProps)(SingleComment);
