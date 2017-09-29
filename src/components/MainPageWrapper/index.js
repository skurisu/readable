import React, { Component } from 'react';
import { Grid, Item } from 'semantic-ui-react';
import CategoryHeading from '../CategoryHeading/index';
import CategoryButtonList from '../CategoryButtonList/index';
import SortOptions from '../SortOptions/index';
import PostsHeading from '../PostsHeading/index';
import PostItem from '../PostItem/index';
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
                <PostItem />
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
