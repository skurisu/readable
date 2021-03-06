import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Container, Form, Header, Button, Icon } from 'semantic-ui-react';
import { createId } from '../../utlis/helpers';

class AddPostForm extends Component {
  state = {
    title: '',
    body: '',
    category: 'redux'
  };

  submitPost = () => {
    this.props.createPost({
      id: createId(),
      author: 'anonymous',
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      category: this.state.category
    });
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleBodyChange = e => {
    this.setState({ body: e.target.value });
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    const { categories } = this.props;

    if (this.props.shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <Container text>
        <Header as="h2" textAlign="center">
          Create a Post
        </Header>
        <Form>
          <Form.Input
            label="Title"
            onChange={this.handleTitleChange}
            required
          />
          <Form.TextArea
            label="Content"
            onChange={this.handleBodyChange}
            placeholder="What do you have to say?"
            required
          />
          <Form.Field
            label="Select a category"
            onChange={this.handleCategoryChange}
            control="select"
            value={this.state.category}
            required
          >
            {categories.map(category => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </Form.Field>
        </Form>
        <Button
          color="green"
          style={{ marginTop: 25 }}
          onClick={this.submitPost}
        >
          Add Post <Icon name="plus" style={{ opacity: 1, marginLeft: 5 }} />
        </Button>
      </Container>
    );
  }
}

export default AddPostForm;
