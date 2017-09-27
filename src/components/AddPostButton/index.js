import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const AddPostButton = props => {
  return (
    <div style={{ position: 'fixed', bottom: 25, right: 25 }}>
      <Link to="/add/post">
        <Button color="green">
          Add Post <Icon name="compose" style={{ opacity: 1, marginLeft: 5 }} />
        </Button>
      </Link>
    </div>
  );
};

export default AddPostButton;
