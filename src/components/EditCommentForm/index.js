import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class EditCommentForm extends Component {
  render() {
    return (
      <div style={{ marginTop: 15 }}>
        <Form>
          <Form.TextArea />
          <div style={{ marginTop: 25 }}>
            <Button
              color="grey"
              size="tiny"
              onClick={() => {
                this.props.toggleEditComment(false);
              }}
            >
              Cancel
            </Button>
            <Button size="tiny" color="olive">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default EditCommentForm;
