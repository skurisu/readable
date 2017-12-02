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

  forceUpdateComponent = () => {
    const id = this.props.match.params.post_id;

    this.props.getPostComments(id);
    this.props.getSinglePost(id);
  };

  submitComment(commentDetails) {
    this.props.createComment(commentDetails, this.forceUpdateComponent);

    this.setState({ body: '' });
  }

  handleSubmitComment = () => {
    const commentId = createId();

    this.submitComment({
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
            <PostItem
              post={this.props.singlePost}
              commentLength={this.props.commentLength}
              setRefreshPosts={this.forceUpdateComponent}
            />
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
            <Button
              size="tiny"
              color="olive"
              onClick={this.handleSubmitComment}
            >
              Submit
            </Button>
          </div>

          <Header as="h3" dividing>
            Comments
          </Header>
          <Comment.Group>
            {comments.map(comment => (
              <SingleComment
                comment={comment}
                key={comment.id}
                forceUpdate={this.forceUpdateComponent}
              />
            ))}
          </Comment.Group>
        </Container>
      </div>
    );
  }
}

export default SinglePostPageWrapper;
