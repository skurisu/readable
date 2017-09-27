import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const AddCommentButton = props => {
  return (
    <div style={{ position: 'fixed', bottom: 25, right: 25 }}>
      <Link to="/comments">
        <Button color="green">
          Add Comment{' '}
          <Icon name="comment" style={{ opacity: 1, marginLeft: 5 }} />
        </Button>
      </Link>
    </div>
  );
};

export default AddCommentButton;
