import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';
import ActionOptions from '../ActionOptions/index';
import EditCommentForm from '../EditCommentForm/index';
import { convertTime } from '../../utlis/helpers';

class SingleComment extends Component {
  state = {
    showEditComment: false
  };

  toggleEditComment = bool => {
    this.setState({ showEditComment: bool });
  };

  vote(voteOption) {
    const id = this.props.comment.id;
    const URL = `/comments/${id}`;
    fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(voteOption)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.props.forceUpdate();
      });
  }

  createVote = option => () => {
    this.vote({ option: option });
  };

  delete(item) {
    const id = this.props.comment.id;
    const URL = `/comments/${id}`;
    fetch(URL, {
      method: 'DELETE',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.props.forceUpdate();
      });
  }

  handleDelete = () => {
    this.delete({
      delete: false
    });
  };

  render() {
    const { comment } = this.props;
    return (
      <Comment>
        <Comment.Content>
          <Comment.Author style={{ display: 'inline' }}>
            {comment.author}
          </Comment.Author>
          <Comment.Metadata>
            <div>{convertTime(comment.timestamp)}</div>
          </Comment.Metadata>
          <Comment.Text>{comment.body}</Comment.Text>
          <Comment.Actions>
            <ActionOptions
              onVote={this.createVote}
              onDelete={this.handleDelete}
              voteScore={comment.voteScore}
              toggleEditForm={this.toggleEditComment}
            />
          </Comment.Actions>
        </Comment.Content>
        {this.state.showEditComment && (
          <EditCommentForm
            toggleEditForm={this.toggleEditComment}
            body={comment.body}
            id={comment.id}
            forceUpdate={this.props.forceUpdate}
          />
        )}
      </Comment>
    );
  }
}

export default SingleComment;
