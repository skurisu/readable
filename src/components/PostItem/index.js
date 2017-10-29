import { connect } from 'react-redux';
import { setPost } from './actions';
import PostItem from './component';

function mapDispatchToProps(dispatch) {
  return {
    setPost: data => {
      dispatch(setPost(data));
    }
  };
}

export default connect(null, mapDispatchToProps)(PostItem);
