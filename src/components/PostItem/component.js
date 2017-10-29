import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostDetails from '../PostDetails/index';
import ActionOptions from '../ActionOptions/index';

class PostItem extends Component {
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
            <ActionOptions voteScore={post.voteScore} />
          </Item.Meta>
        </Item.Content>
      </Item>
    );
  }
}

export default PostItem;
