import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import PostItem from '../PostItem/index';
import api from './api';

class PostItems extends Component {
  componentWillMount() {
    this.getData();
  }

  getData() {
    api().then(data => {
      this.props.setRefreshPosts(false);
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
    if (previousProps.refreshedPosts === false && this.props.refreshedPosts) {
      this.getData();
    }
  }

  render() {
    const { selectedPosts } = this.props;

    return (
      <Item.Group>
        {selectedPosts.map(post => (
          <PostItem
            key={post.id}
            post={post}
            setRefreshPosts={this.props.setRefreshPosts}
          />
        ))}
      </Item.Group>
    );
  }
}

export default PostItems;
