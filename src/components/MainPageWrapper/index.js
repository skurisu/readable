import React, { Component } from 'react';
import { Grid, Item } from 'semantic-ui-react';
import CategoryHeading from '../CategoryHeading/index';
import CategoryButtonList from '../CategoryButtonList';
import SortOptions from '../SortOptions/index';
import PostsHeading from '../PostsHeading/index';
import PostItems from '../PostItems/index';
import AddPostButton from '../AddPostButton/index';

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
