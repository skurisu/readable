import { connect } from 'react-redux';
import { setComments } from './actions';
import SinglePostPageWrapper from './component';

function mapDispatchToProps(dispatch) {
  return {
    setComments: data => {
      dispatch(setComments(data));
    }
  };
}

function mapStateToProps(state) {
  return {
    singlePost: state.allPosts.singlePost,
    comments: state.postComments.comments
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  SinglePostPageWrapper
);
