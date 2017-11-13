import { connect } from 'react-redux';
import { setRefreshPosts } from '../PostItems/actions';
import ActionOptions from './component';

function mapDispatchToProps(dispatch) {
  return {
    setRefreshPosts: data => {
      dispatch(setRefreshPosts(data));
    }
  };
}

export default connect(null, mapDispatchToProps)(ActionOptions);
