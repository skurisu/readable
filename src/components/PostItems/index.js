import { connect } from 'react-redux';
import { setPosts, setSelectedPosts } from './actions';
import { setPost } from '../PostItem/actions';
import PostItems from './component';

function mapDispatchToProps(dispatch) {
  return {
    setPosts: data => {
      dispatch(setPosts(data));
    },
    setSelectedPosts: data => {
      dispatch(setSelectedPosts(data));
    },
    setPost: data => {
      dispatch(setPost(data));
    }
  };
}

function mapStateToProps(state) {
  return {
    posts: state.allPosts.posts,
    selectedPosts: state.allPosts.selectedPosts,
    singlePost: state.allPosts.singlePost,
    selectedCategory: state.categoryButtons.selectedCategory
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItems);
