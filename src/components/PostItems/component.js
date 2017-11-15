import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import PostItem from '../PostItem/index';
import api, { comment } from './api';

class PostItems extends Component {
  componentWillMount() {
    this.getData();
  }

  getData() {
    api().then(data => {
      this.props.setRefreshPosts(false);

      const commentPromises = data.map(post => {
        const id = post.id;
        return comment(id);
      });
      Promise.all(commentPromises).then(commentsArray => {
        data.map((post, index) => {
          post.commentsLength = commentsArray[index].length;
          return post;
        });

        this.props.setPosts(data);
        this.props.setSelectedPosts(data);
      });
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

  sortPosts = () => {
    const { sortType, selectedPosts } = this.props;
    if (sortType === 'ascendingVotes') {
      selectedPosts.sort((a, b) => a.voteScore - b.voteScore);
    }
    if (sortType === 'descendingVotes') {
      selectedPosts.sort((a, b) => b.voteScore - a.voteScore);
    }
    if (sortType === 'descendingTime') {
      selectedPosts.sort((a, b) => b.timestamp - a.timestamp);
    }
    if (sortType === 'ascendingTime') {
      selectedPosts.sort((a, b) => a.timestamp - b.timestamp);
    }
  };

  render() {
    const { selectedPosts } = this.props;
    this.sortPosts();
    return (
      <Item.Group>
        {selectedPosts.map(post => (
          <PostItem
            key={post.id}
            post={post}
            commentLength={post.commentsLength}
            setRefreshPosts={this.props.setRefreshPosts}
          />
        ))}
      </Item.Group>
    );
  }
}

export default PostItems;
