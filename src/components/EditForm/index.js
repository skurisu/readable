import { connect } from 'react-redux';
import { setRefreshPosts } from '../PostItems/actions';
import EditForm from './component';

function mapDispatchToProps(dispatch) {
  return {
    setRefreshPosts: data => {
      dispatch(setRefreshPosts(data));
    }
  };
}

export default connect(null, mapDispatchToProps)(EditForm);
