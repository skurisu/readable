import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class ActionOptions extends Component {
  render() {
    return (
      <div>
        <Icon link color="green" name="arrow up" />
        <span>
          <strong>{this.props.voteScore}</strong>
        </span>
        <Icon link color="red" name="arrow down" style={{ marginLeft: 3.5 }} />
        <span style={{ color: '#2185d0', marginRight: 5, marginLeft: 5 }}>
          <strong>2</strong>
          <Icon name="comment" />
        </span>
        <Icon
          link
          name="edit"
          onClick={() => {
            this.props.toggleEditForm(true);
          }}
        />
        <Icon link color="red" name="delete" />
      </div>
    );
  }
}

export default ActionOptions;
