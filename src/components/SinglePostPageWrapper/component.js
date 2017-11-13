import React, { Component } from 'react';
import {
  Comment,
  Container,
  Header,
  Item,
  Form,
  Button
} from 'semantic-ui-react';
import SingleComment from '../Comment/index';
import PostItem from '../PostItem';
import { createId } from '../../utlis/helpers';

class SinglePostPageWrapper extends Component {
  state = {
    body: ''
  };

  componentWillMount() {
    this.forceUpdateComponent();
  }

  forceUpdateComponent() {
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

  createComment(commentDetails) {
    fetch('/comments', {
      method: 'POST',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentDetails)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.forceUpdateComponent();
      });

    this.setState({ body: '' });
  }

  submitComment = () => {
    const commentId = createId();

    this.createComment({
      id: commentId,
      timestamp: Date.now(),
      body: this.state.body,
      author: 'Anonymous Commenter',
      parentId: this.props.singlePost.id
    });
  };

  handleBodyChange = e => {
    this.setState({ body: e.target.value });
  };

  render() {
    const { comments } = this.props;

    return (
      <div>
        <Container text>
          <Item.Group>
            <PostItem post={this.props.singlePost} />
          </Item.Group>
          <Header as="h3" dividing>
            Add a comment!
          </Header>

          <Form>
            <Form.TextArea
              label="Your message"
              value={this.state.body}
              onChange={this.handleBodyChange}
            />
          </Form>
          <div style={{ marginTop: 25 }}>
            <Button size="tiny" color="olive" onClick={this.submitComment}>
              Submit
            </Button>
          </div>

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
