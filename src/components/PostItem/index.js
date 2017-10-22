import { connect } from 'react-redux';
import { setPosts, setSelectedPosts } from './actions';
import PostItem from './component';

function mapDispatchToProps(dispatch) {
  return {
    setPosts: data => {
      dispatch(setPosts(data));
    },
    setSelectedPosts: data => {
      dispatch(setSelectedPosts(data));
    }
  };
}

function mapStateToProps(state) {
  return {
    posts: state.allPosts.posts,
    selectedPosts: state.allPosts.selectedPosts,
    selectedCategory: state.categoryButtons.selectedCategory
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
