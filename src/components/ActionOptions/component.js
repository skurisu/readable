import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class ActionOptions extends Component {
  delete(item) {
    const id = this.props.id;
    const URL = `/posts/${id}`;
    fetch(URL, {
      method: 'DELETE',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.props.setRefreshPosts(true);
      });
  }

  handleDelete = () => {
    this.delete({
      delete: false
    });
  };

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
        <Icon link color="red" name="delete" onClick={this.handleDelete} />
      </div>
    );
  }
}

export default ActionOptions;
