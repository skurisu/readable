import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import PostItem from '../PostItem/index';

class PostItems extends Component {
  componentWillMount() {
    this.props.getData(this.props.match.params.category);
  }

  componentDidUpdate(previousProps) {
    const currentCategory = this.props.match.params.category;
    const previousCategory = previousProps.match.params.category;

    if (previousCategory !== currentCategory) {
      const selectedPosts = this.props.posts.filter(
        post => post.category === currentCategory
      );
      if (currentCategory) {
        this.props.setSelectedPosts(selectedPosts);
      } else {
        this.props.setSelectedPosts(this.props.posts);
      }
    }
    if (previousProps.refreshedPosts === false && this.props.refreshedPosts) {
      this.props.getData(this.props.match.params.category);
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
