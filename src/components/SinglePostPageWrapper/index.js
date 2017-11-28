import { connect } from 'react-redux';
import { setComments, setPost } from './actions';
import SinglePostPageWrapper from './component';
import { withRouter } from 'react-router';

function mapDispatchToProps(dispatch) {
  return {
    setComments: data => {
      dispatch(setComments(data));
    },
    setPost: data => {
      dispatch(setPost(data));
    }
  };
}

function mapStateToProps(state) {
  return {
    comments: state.postComments.comments,
    singlePost: state.postComments.singlePost
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SinglePostPageWrapper)
);
