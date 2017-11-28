import { connect } from 'react-redux';
import { setPosts, setSelectedPosts, setRefreshPosts } from './actions';
import PostItems from './component';
import { withRouter } from 'react-router';

function mapDispatchToProps(dispatch) {
  return {
    setPosts: data => {
      dispatch(setPosts(data));
    },
    setSelectedPosts: data => {
      dispatch(setSelectedPosts(data));
    },
    setRefreshPosts: data => {
      dispatch(setRefreshPosts(data));
    }
  };
}

function mapStateToProps(state) {
  return {
    posts: state.allPosts.posts,
    selectedPosts: state.allPosts.selectedPosts,
    refreshedPosts: state.allPosts.refreshedPosts,
    sortType: state.sortBy.name
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostItems)
);
