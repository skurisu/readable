import { connect } from 'react-redux';
import SinglePostPageWrapper from './component';

function mapStateToProps(state) {
  return {
    singlePost: state.allPosts.singlePost
  };
}

export default connect(mapStateToProps)(SinglePostPageWrapper);
