import React, { Component } from 'react';
import { Comment, Container, Header, Item } from 'semantic-ui-react';
import SingleComment from '../Comment/index';
import PostItem from '../PostItem';

class SinglePostPageWrapper extends Component {
  componentWillMount() {
    const { id } = this.props.singlePost;
    const URL = `/posts/${id}/comments`;

    fetch(URL, {
      headers: { Authorization: 'toni' }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.props.setComments(data);
      });
  }

  render() {
    const { comments } = this.props;
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
            {comments.map(comment => (
              <SingleComment comment={comment} key={comment.id} />
            ))}
          </Comment.Group>
        </Container>
      </div>
    );
  }
}

export default SinglePostPageWrapper;
