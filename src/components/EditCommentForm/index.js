import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class EditCommentForm extends Component {
  state = {
    body: ''
  };

  componentWillMount() {
    this.setState({ body: this.props.body });
  }

  updateComment(updatedComment) {
    const id = this.props.id;

    const URL = `/comments/${id}`;
    fetch(URL, {
      method: 'PUT',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedComment)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        // this.props.forceUpdate();
        this.props.toggleEditForm(false);
      });
  }

  submitComment = () => {
    this.updateComment({
      body: this.state.body,
      timestamp: Date.now()
    });
  };

  handleBodyChange = e => {
    const body = e.target.value;
    this.setState({ body });
  };

  render() {
    return (
      <div style={{ marginTop: 15 }}>
        <Form>
          <Form.TextArea
            value={this.state.body}
            onChange={this.handleBodyChange}
          />

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
            <Button size="tiny" color="olive" onClick={this.submitComment}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default EditCommentForm;