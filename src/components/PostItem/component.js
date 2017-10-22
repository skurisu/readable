import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import PostDetails from '../PostDetails/index';
import ActionOptions from '../ActionOptions/index';
import api from './api';

class PostItem extends Component {
  componentWillMount() {
    api().then(data => {
      this.props.setPosts(data);
      this.props.setSelectedPosts(data);
    });
  }

  componentDidUpdate(previousProps) {
    if (previousProps.selectedCategory !== this.props.selectedCategory) {
      const selectedPosts = this.props.posts.filter(
        post => post.category === this.props.selectedCategory
      );
      this.props.setSelectedPosts(selectedPosts);
    }
  }

  render() {
    const { selectedPosts } = this.props;
    return (
      <Item.Group>
        {selectedPosts.map(post => (
          <Item key={post.id}>
            <Item.Content>
              <Item.Header>{post.title}</Item.Header>
              <Item.Description>{post.body}</Item.Description>
              <Item.Meta>
                <PostDetails author={post.author} timestamp={post.timestamp} />
                <ActionOptions voteScore={post.voteScore} />
              </Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    );
  }
}

export default PostItem;
