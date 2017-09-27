import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import PostDetails from '../PostDetails/index';
import ActionOptions from '../ActionOptions/index';

class PostItem extends Component {
  render() {
    return (
      <Item>
        <Item.Content>
          <Item.Header>Arrowhead Valley Camp</Item.Header>
          <Item.Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex
            distinctio quod dignissimos, odit voluptas qui quasi assumenda
            incidunt earum veritatis nemo hic omnis, quis ullam rem quam officia
            in?
          </Item.Description>
          <Item.Meta>
            <PostDetails />
            <ActionOptions />
          </Item.Meta>
        </Item.Content>
      </Item>
    );
  }
}

export default PostItem;
