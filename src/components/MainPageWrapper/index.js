import React, { Component } from 'react';
import { Grid, Comment } from 'semantic-ui-react';
import CategoryHeader from '../CategoryHeading/index';
import CategoryButton from '../CategoryButton/index';
import SortOptions from '../SortOptions/index';
import CommentHeading from '../CommentHeading/index';
import CommentWrapper from '../CommentWrapper/index';
import AddCommentButton from '../AddCommentButton/index';

class MainPageWrapper extends Component {
  render() {
    return (
      <div>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={4}>
              <CategoryHeader />
              <CategoryButton />
            </Grid.Column>
            <Grid.Column width={12}>
              <SortOptions />
              <Comment.Group>
                <CommentHeading />
                <CommentWrapper />
              </Comment.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <AddCommentButton />
      </div>
    );
  }
}

export default MainPageWrapper;
