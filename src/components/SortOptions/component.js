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
          content="Most Votes"
          icon="thumbs outline up"
          labelPosition="left"
          size="tiny"
          onClick={() => this.props.sortBy('descendingVotes')}
        />
        <Button
          color="yellow"
          content="Least Votes"
          icon="thumbs outline down"
          labelPosition="left"
          size="tiny"
          onClick={() => this.props.sortBy('ascendingVotes')}
        />

        <Button
          color="yellow"
          content="Most Recent"
          icon="time"
          labelPosition="left"
          size="tiny"
          onClick={() => this.props.sortBy('descendingTime')}
        />
        <Button
          color="yellow"
          content="Least Recent"
          icon="time"
          labelPosition="left"
          size="tiny"
          onClick={() => this.props.sortBy('ascendingTime')}
        />
      </div>
    );
  }
}

export default SortOptions;
