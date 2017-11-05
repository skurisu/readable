import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class EditForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Input label="Edit title:" value={this.props.title} />
          <Form.TextArea label="Edit content:" value={this.props.body} />
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
          <Button size="tiny" color="olive">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default EditForm;
