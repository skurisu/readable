import React from 'react';
import { Comment } from 'semantic-ui-react';
import ActionOptions from '../ActionOptions/index';

const CommentsList = () => {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Author style={{ display: 'inline' }}>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <ActionOptions />
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default CommentsList;
