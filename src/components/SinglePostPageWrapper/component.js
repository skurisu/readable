import React, { Component } from 'react';
import { Comment, Container, Header, Item } from 'semantic-ui-react';
import CommentsList from '../CommentsList/index';
import PostItem from '../PostItem';

class SinglePostPageWrapper extends Component {
  render() {
    return (
      <div>
        <Container text>
          <Item.Group>
            <PostItem post={this.props.singlePost} />
          </Item.Group>
          <Header as="h3" dividing>
            Comments
          </Header>
          <Comment.Group>
            <CommentsList />
          </Comment.Group>
        </Container>
      </div>
    );
  }
}

export default SinglePostPageWrapper;
