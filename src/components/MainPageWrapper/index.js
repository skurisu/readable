import React, { Component } from 'react';
import { Grid, Item } from 'semantic-ui-react';
import CategoryHeading from '../CategoryHeading';
import CategoryButtonList from '../CategoryButtonList';
import SortOptions from '../SortOptions';
import PostsHeading from '../PostsHeading';
import PostItems from '../PostItems';
import AddPostButton from '../AddPostButton';

class MainPageWrapper extends Component {
  render() {
    return (
      <div>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={4}>
              <CategoryHeading />
              <CategoryButtonList />
            </Grid.Column>
            <Grid.Column width={12}>
              <SortOptions />
              <Item.Group>
                <PostsHeading />
                <PostItems />
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <AddPostButton />
      </div>
    );
  }
}

export default MainPageWrapper;
