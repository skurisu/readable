import { connect } from 'react-redux';
import { deletePost, vote } from './actions';
import PostItem from './component';

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (item, id, setRefresh) => {
      dispatch(deletePost(item, id, setRefresh));
    },
    vote: (item, id, setRefresh) => {
      dispatch(vote(item, id, setRefresh));
    }
  };
}

export default connect(null, mapDispatchToProps)(PostItem);
