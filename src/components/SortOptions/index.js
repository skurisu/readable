import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class SortOptions extends Component {
  render() {
    return (
      <div style={{ float: 'right' }}>
        <span>
          <strong>Sort By: </strong>
        </span>
        <Button
          color="yellow"
          content="Upvotes"
          icon="thumbs outline up"
          labelPosition="left"
          size="tiny"
        />
        <Button
          color="yellow"
          content="Time ago"
          icon="time"
          labelPosition="left"
          size="tiny"
        />
      </div>
    );
  }
}

export default SortOptions;
