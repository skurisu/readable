import { connect } from 'react-redux';
import SingleComment from './component';
import { voteComment, deleteComment } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    voteComment: (voteOption, id, forceUpdate) => {
      dispatch(voteComment(voteOption, id, forceUpdate));
    },
    deleteComment: (item, id, forceUpdate) => {
      dispatch(deleteComment(item, id, forceUpdate));
    }
  };
}

export default connect(null, mapDispatchToProps)(SingleComment);
