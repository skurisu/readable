import React, { Component } from 'react';
import { Comment, Icon } from 'semantic-ui-react';

class CommentActions extends Component {
  render() {
    return (
      <Comment.Actions>
        <div>
          <Icon link color="green" name="arrow up" />
          <span>
            <strong>1234</strong>
          </span>
          <Icon
            link
            color="red"
            name="arrow down"
            style={{ marginLeft: 3.5 }}
          />
          <Icon link name="edit" />
          <Icon link color="red" name="delete" />
        </div>
      </Comment.Actions>
    );
  }
}

export default CommentActions;
