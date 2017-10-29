import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import PostItem from '../PostItem/index';
import api from './api';

class PostItems extends Component {
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
        {selectedPosts.map(post => <PostItem key={post.id} post={post} />)}
      </Item.Group>
    );
  }
}

export default PostItems;
