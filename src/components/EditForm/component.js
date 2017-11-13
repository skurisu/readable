import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class EditForm extends Component {
  state = {
    title: '',
    body: ''
  };

  componentWillMount() {
    this.setState({ title: this.props.title, body: this.props.body });
  }

  componentWillReceiveProps(nextProps) {
    const futureState = {};

    if (nextProps.title !== this.props.title) {
      futureState.title = nextProps.title;
    }
    if (nextProps.body !== this.props.body) {
      futureState.body = nextProps.body;
    }
    if (Object.keys(futureState).length !== 0) {
      this.setState(futureState);
    }
  }

  updatePost(updatedPost) {
    const id = this.props.id;
    const URL = `/posts/${id}`;
    fetch(URL, {
      method: 'PUT',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPost)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.props.setRefreshPosts(true);
        this.props.toggleEditForm(false);
      });
  }

  submitPost = () => {
    this.updatePost({
      title: this.state.title,
      body: this.state.body
    });
  };

  handleTitleChange = e => {
    const title = e.target.value;
    this.setState({ title });
  };

  handleBodyChange = e => {
    const body = e.target.value;
    this.setState({ body });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Input
            label="Edit title:"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <Form.TextArea
            label="Edit content:"
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
        </Form>
        <div style={{ marginTop: 25 }}>
          <Button
            color="grey"
            size="tiny"
            onClick={() => {
              this.props.toggleEditForm(false);
            }}
          >
            Cancel
          </Button>
          <Button size="tiny" color="olive" onClick={this.submitPost}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default EditForm;
