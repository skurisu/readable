import React from 'react';
import { Comment, Container, Header, Item } from 'semantic-ui-react';
import CommentsList from '../CommentsList/index';
import PostItem from '../PostItem';

const SinglePostPageWrapper = () => {
  return (
    <div>
      <Container text>
        <Item.Group>
          <PostItem />
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
};

export default SinglePostPageWrapper;
