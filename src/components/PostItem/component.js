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

  render() {
    const { post } = this.props;
    return (
      <Item>
        <Item.Content>
          <Link to="/single-post">
            <Item.Header onClick={() => this.props.setPost(post)}>
              {post.title}
            </Item.Header>
          </Link>
          <Item.Description>{post.body}</Item.Description>
          <Item.Meta>
            <PostDetails author={post.author} timestamp={post.timestamp} />
            <ActionOptions
              voteScore={post.voteScore}
              toggleEditForm={this.toggleEditForm}
            />
          </Item.Meta>
          {this.state.showEditForm && (
            <EditForm
              toggleEditForm={this.toggleEditForm}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          )}
        </Item.Content>
      </Item>
    );
  }
}

export default PostItem;
