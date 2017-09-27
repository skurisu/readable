import React from 'react';
import { Comment } from 'semantic-ui-react';
import CommentActions from '../CommentActions/index';

const CommentWrapper = () => {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <CommentActions />
      </Comment.Content>
    </Comment>
  );
};

export default CommentWrapper;
