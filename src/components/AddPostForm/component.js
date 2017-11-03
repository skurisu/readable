import React, { Component } from 'react';
import { Container, Form, Header } from 'semantic-ui-react';

class AddPostForm extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Container text>
        <Header as="h2" textAlign="center">
          Create a Post
        </Header>
        <Form>
          <Form.Input label="Title" />
          <Form.TextArea
            label="Content"
            placeholder="What do you have to say?"
          />
          <Form.Field label="Select a category" control="select">
            {categories.map(category => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default AddPostForm;
