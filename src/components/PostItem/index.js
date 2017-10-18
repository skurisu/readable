import { connect } from 'react-redux';
import { getPosts } from './actions';
import PostItem from './component';

function mapDispatchToProps(dispatch) {
  return {
    getPosts: data => {
      dispatch(getPosts(data));
    }
  };
}

function mapStateToProps(state) {
  return { posts: state.allPosts.posts };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
