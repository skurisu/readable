import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import PostDetails from '../PostDetails/index';
import ActionOptions from '../ActionOptions/index';
import api from './api';

class PostItem extends Component {
  componentWillMount() {
    api().then(data => {
      this.props.getPosts(data);
    });
  }

  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <Item.Group>
        {posts.map(post => (
          <Item key={post.id}>
            <Item.Content>
              <Item.Header>{post.title}</Item.Header>
              <Item.Description>{post.body}</Item.Description>
              <Item.Meta>
                <PostDetails author={post.author} time={post.timestamp} />
                <ActionOptions />
              </Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    );
  }
}

export default PostItem;
