import { connect } from 'react-redux';
import {
  setComments,
  setPost,
  createComment,
  getSinglePost,
  setCommentLength,
  getPostComments
} from './actions';
import SinglePostPageWrapper from './component';
import { withRouter } from 'react-router';

function mapDispatchToProps(dispatch) {
  return {
    setComments: data => {
      dispatch(setComments(data));
    },
    setPost: data => {
      dispatch(setPost(data));
    },
    createComment: (commentDetails, forceUpdateComponent) => {
      dispatch(createComment(commentDetails, forceUpdateComponent));
    },
    getSinglePost: id => {
      dispatch(getSinglePost(id));
    },
    setCommentLength: data => {
      dispatch(setCommentLength(data));
    },
    getPostComments: id => {
      dispatch(getPostComments(id));
    }
  };
}

function mapStateToProps(state) {
  return {
    comments: state.postComments.comments,
    singlePost: state.postComments.singlePost,
    commentLength: state.postComments.commentLength
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SinglePostPageWrapper)
);
