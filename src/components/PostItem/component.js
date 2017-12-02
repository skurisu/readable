import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostDetails from '../PostDetails/index';
import ActionOptions from '../ActionOptions/index';
import EditForm from '../EditForm/component';

class PostItem extends Component {
  state = {
    showEditForm: false
  };

  toggleEditForm = bool => {
    this.setState({ showEditForm: bool });
  };

  createVote = option => () => {
    this.props.votePost(
      { option: option },
      this.props.post.id,
      this.props.setRefreshPosts
    );
  };

  handleDelete = () => {
    this.props.deletePost(
      {
        delete: false
      },
      this.props.post.id,
      this.props.setRefreshPosts
    );
  };

  render() {
    const { post } = this.props;
    return (
      <Item>
        <Item.Content>
          <Link to={`/${post.category}/${post.id}`}>
            <Item.Header>{post.title}</Item.Header>
          </Link>
          <Item.Description>{post.body}</Item.Description>
          <Item.Meta>
            <PostDetails author={post.author} timestamp={post.timestamp} />
            <ActionOptions
              onVote={this.createVote}
              onDelete={this.handleDelete}
              voteScore={post.voteScore}
              toggleEditForm={this.toggleEditForm}
              id={post.id}
              setRefreshPosts={this.props.setRefreshPosts}
              commentLength={this.props.commentLength}
            />
          </Item.Meta>
          {this.state.showEditForm && (
            <EditForm
              toggleEditForm={this.toggleEditForm}
              id={post.id}
              title={post.title}
              body={post.body}
              setRefreshPosts={this.props.setRefreshPosts}
            />
          )}
        </Item.Content>
      </Item>
    );
  }
}

export default PostItem;
