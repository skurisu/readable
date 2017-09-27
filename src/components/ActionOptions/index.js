import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class ActionOptions extends Component {
  render() {
    return (
      <div>
        <Icon link color="green" name="arrow up" />
        <span>
          <strong>1234</strong>
        </span>
        <Icon link color="red" name="arrow down" style={{ marginLeft: 3.5 }} />
        <Icon link name="edit" />
        <Icon link color="red" name="delete" />
      </div>
    );
  }
}

export default ActionOptions;
