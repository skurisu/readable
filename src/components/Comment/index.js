import React from 'react';
import { Comment } from 'semantic-ui-react';
import ActionOptions from '../ActionOptions/index';
import { convertTime } from '../../utlis/helpers';

const SingleComment = props => {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Author style={{ display: 'inline' }}>
          {props.comment.author}
        </Comment.Author>
        <Comment.Metadata>
          <div>{convertTime(props.comment.timestamp)}</div>
        </Comment.Metadata>
        <Comment.Text>{props.comment.body}</Comment.Text>
        <Comment.Actions>
          <ActionOptions voteScore={props.comment.voteScore} />
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default SingleComment;
